import {
  SchemaFormType,
  ShoppingCartContext,
  schemaForm,
} from '@/contexts/ShoppingCartContext.tsx'
import { Cipher, Pin } from '@/pages/Checkout/assets/icons.ts'
import { CardItems } from '@/pages/Checkout/components/CardItems/index.tsx'
import { ContainerCheckoutEmpty } from '@/pages/Checkout/components/ContainerCheckoutEmpty/index.tsx'
import { formatCurrency } from '@/utils/formatCurrency.ts'
import { paymentMethods } from '@/utils/paymentMethods.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useContext, useEffect, useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { z } from 'zod'
import {
  CheckoutContainer,
  CheckoutContent,
  CheckoutFormContainer,
  CheckoutOrderContainer,
  CheckoutOrderContent,
  ChoosePaymentMethodContainer,
  FormContainer,
  FormContent,
  InfoOne,
  InfoThree,
  InfoTwo,
  InputContainer,
  InputsContainer,
  InputsContent,
  ItemsContainer,
  Label,
  MethodPaymentContainer,
  MethodPaymentContent,
  OptionalInput,
  PricesItemsContainer,
  PricesItemsContent,
  TitleContainer,
  TitleFormContainer,
  TitleFormContent,
} from './styles'

const schemaResponseAxios = z.object({
  state: z.string().min(1).max(2),
  street: z.string().min(1),
  city: z.string().min(1),
  neighborhood: z.string().min(1),
})
type SchemaResponseAxiosType = z.infer<typeof schemaResponseAxios>

export function Checkout() {
  const formRef = useRef<HTMLFormElement>(null)
  const navigate = useNavigate()
  const { shoppingCartState } = useContext(ShoppingCartContext)
  const { register, watch, control, setValue } = useForm<SchemaFormType>({
    resolver: zodResolver(schemaForm),
    defaultValues: {
      cep: '',
      street: '',
      streetNumber: '',
      adjunt: '',
      neighborhood: '',
      city: '',
      state: '',
      methodPayments: 'dinheiro',
    },
  })

  function handleFormData() {
    if (formRef.current) {
      const formData = watch()

      if (formData) {
        localStorage.setItem(
          '@ignite-coffeDelivery:shopping-cart-form-1.0.0',
          JSON.stringify({ form: formData }),
        )
        navigate('/success', {
          state: {
            formData,
          },
        })
      }
    }
  }
  const totalValueItems = shoppingCartState.reduce((acc, item) => {
    return acc + item.total
  }, 0)
  const cep = watch('cep')

  useEffect(() => {
    const regexWithoutDash = /^\d{8}$/
    const regexWithDash = /^\d{5}-\d{3}$/

    if (regexWithoutDash.test(cep) || regexWithDash.test(cep)) {
      axios
        .get(`https://brasilapi.com.br/api/cep/v1/${cep}`, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          const address: SchemaResponseAxiosType = res.data

          if (address) {
            for (const key in address) {
              setValue(
                key as keyof SchemaFormType,
                address[key as keyof typeof address],
              )
            }
          }
        })
        .catch(() => console.error('CEP está incorreto!'))
    }
  }, [setValue, cep])

  return (
    <>
      {shoppingCartState.length === 0 ? (
        <ContainerCheckoutEmpty />
      ) : (
        <CheckoutContainer>
          <CheckoutContent>
            <CheckoutFormContainer>
              <FormContainer>
                <TitleContainer>
                  <h2>Complete seu pedido</h2>
                </TitleContainer>
                <form ref={formRef}>
                  <FormContent>
                    <InputsContainer>
                      <InputsContent>
                        <TitleFormContainer>
                          <TitleFormContent>
                            <i>
                              <img src={Pin} alt="" />
                            </i>
                            <div>
                              <h3>Endereço de Entrega</h3>
                              <p>
                                Informe o endereço onde deseja receber seu
                                pedido
                              </p>
                            </div>
                          </TitleFormContent>
                        </TitleFormContainer>
                        <InputContainer>
                          <input
                            {...register('cep', { required: true })}
                            type="text"
                            placeholder="CEP"
                          />
                        </InputContainer>
                        <InfoOne>
                          <InputContainer>
                            <input
                              {...register('street', { required: true })}
                              type="text"
                              placeholder="Rua"
                              disabled
                              readOnly
                            />
                          </InputContainer>
                        </InfoOne>
                        <InfoTwo>
                          <InputContainer>
                            <input
                              {...register('streetNumber')}
                              type="text"
                              placeholder="Número"
                            />
                          </InputContainer>
                          <InputContainer>
                            <OptionalInput
                              {...register('adjunt')}
                              type="text"
                              placeholder="Complemento"
                            />
                            <em>Opcional</em>
                          </InputContainer>
                        </InfoTwo>
                        <InfoThree>
                          <InputContainer>
                            <input
                              {...register('neighborhood')}
                              type="text"
                              placeholder="Bairro"
                              disabled
                              readOnly
                            />
                          </InputContainer>
                          <InputContainer>
                            <input
                              {...register('city')}
                              type="text"
                              placeholder="Cidade"
                              disabled
                              readOnly
                            />
                          </InputContainer>
                          <InputContainer>
                            <input
                              {...register('state', { required: true })}
                              type="text"
                              placeholder="UF"
                              disabled
                              readOnly
                            />
                          </InputContainer>
                        </InfoThree>
                      </InputsContent>
                    </InputsContainer>
                    <MethodPaymentContainer>
                      <MethodPaymentContent>
                        <TitleFormContainer>
                          <TitleFormContent>
                            <i>
                              <img src={Cipher} alt="" />
                            </i>
                            <div>
                              <h3>Pagamento</h3>
                              <p>
                                O pagamento é feito na entrega. Escolha a forma
                                que deseja pagar
                              </p>
                            </div>
                          </TitleFormContent>
                        </TitleFormContainer>
                        <ChoosePaymentMethodContainer>
                          {paymentMethods.map(({ name, method, id }) => {
                            return (
                              <button key={name} type="button">
                                <Controller
                                  control={control}
                                  name="methodPayments"
                                  render={({ field }) => (
                                    <input
                                      id={id}
                                      type="radio"
                                      {...field}
                                      onChange={() => field.onChange(id)}
                                    />
                                  )}
                                />
                                <Label
                                  defaultValue={watch('methodPayments')}
                                  htmlFor={id}
                                >
                                  <img src={method} alt="" />
                                  <span>{name}</span>
                                </Label>
                              </button>
                            )
                          })}
                        </ChoosePaymentMethodContainer>
                      </MethodPaymentContent>
                    </MethodPaymentContainer>
                  </FormContent>
                </form>
              </FormContainer>
            </CheckoutFormContainer>
            <CheckoutOrderContainer>
              <TitleContainer>
                <h2>Cafés selecionados</h2>
              </TitleContainer>
              <CheckoutOrderContent>
                <ItemsContainer>
                  <CardItems />
                </ItemsContainer>
                <PricesItemsContainer>
                  <PricesItemsContent>
                    <div>
                      <p>Total de itens</p>
                      <span>{formatCurrency(totalValueItems)}</span>
                    </div>
                    <div>
                      <p>Entrega</p>
                      <span>R$ 10,00</span>
                    </div>
                    <div>
                      <p>Total</p>
                      <span>
                        {formatCurrency(
                          totalValueItems + Number('10,00'.replace(',', '.')),
                        )}
                      </span>
                    </div>
                    <button
                      type="submit"
                      onClick={handleFormData}
                      disabled={shoppingCartState.length === 0}
                    >
                      Confirmar pedido
                    </button>
                  </PricesItemsContent>
                </PricesItemsContainer>
              </CheckoutOrderContent>
            </CheckoutOrderContainer>
          </CheckoutContent>
        </CheckoutContainer>
      )}
    </>
  )
}
