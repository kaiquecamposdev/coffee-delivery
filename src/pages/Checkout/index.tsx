import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import {
  SchemaFormType,
  ShoppingCartContext,
  schemaForm,
} from '../../contexts/ShoppingCartContext.tsx'
import { formatCurrency } from '../../utils/formatCurrency.ts'
import { paymentMethods } from '../../utils/paymentMethods.ts'
import { Cipher, Pin } from './assets/icons.ts'
import { CardItems } from './components/CardItems/index.tsx'
import { ContainerCheckoutEmpty } from './components/ContainerCheckoutEmpty/index.tsx'
import {
  ContainerCheckout,
  ContainerCheckoutForm,
  ContainerCheckoutOrder,
  ContainerChoosePaymentMethod,
  ContainerForm,
  ContainerInput,
  ContainerItems,
  ContainerMethodPayment,
  ContainerPricesItems,
  ContentCheckoutOrder,
  ContentPricesItems,
  ContentSectionForm,
  FormContent,
  InfoOne,
  InfoThree,
  InfoTwo,
  Label,
  OptionalInput,
  SpanError,
  TitleSectionCheckout,
} from './styles'

export function Checkout() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<SchemaFormType>({
    resolver: zodResolver(schemaForm),
  })
  const { shoppingCartState } = useContext(ShoppingCartContext)
  function handleFormData(formData: SchemaFormType) {
    if (formData) {
      navigate('/success', {
        state: {
          formData,
        },
      })
    }
  }
  const totalValueItems = shoppingCartState?.reduce((acc, item) => {
    return acc + item.total
  }, 0)

  return (
    <>
      {shoppingCartState.length === 0 ? (
        <ContainerCheckoutEmpty />
      ) : (
        <ContainerCheckout>
          <form onSubmit={handleSubmit(handleFormData)}>
            <ContainerCheckoutForm>
              <h2>Complete seu pedido</h2>
              <ContainerForm>
                <FormContent>
                  <TitleSectionCheckout>
                    <i>
                      <img src={Pin} alt="" />
                    </i>
                    <div>
                      <h3>Endereço de Entrega</h3>
                      <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                  </TitleSectionCheckout>
                  <ContentSectionForm>
                    <ContainerInput>
                      <input
                        {...register('cep', { required: true })}
                        type="text"
                        placeholder="CEP"
                      />
                      {errors.cep && (
                        <SpanError>Esse campo deve ser prenchido</SpanError>
                      )}
                    </ContainerInput>
                    <InfoOne>
                      <ContainerInput>
                        <input
                          {...register('street', { required: true })}
                          type="text"
                          placeholder="Rua"
                        />
                        {errors.street && (
                          <SpanError>Esse campo deve ser prenchido</SpanError>
                        )}
                      </ContainerInput>
                    </InfoOne>
                    <InfoTwo>
                      <ContainerInput>
                        <input
                          {...register('streetNumber', { required: true })}
                          type="text"
                          placeholder="Número"
                        />
                        {errors.streetNumber && (
                          <SpanError>Esse campo deve ser prenchido</SpanError>
                        )}
                      </ContainerInput>
                      <ContainerInput>
                        <OptionalInput
                          {...register('adjunt')}
                          type="text"
                          value={watch('adjunt')}
                          placeholder="Complemento"
                        />
                        <em>Opcional</em>
                        {errors.adjunt && (
                          <SpanError>Esse campo deve ser prenchido</SpanError>
                        )}
                      </ContainerInput>
                    </InfoTwo>
                    <InfoThree>
                      <ContainerInput>
                        <input
                          {...register('neighborhood', { required: true })}
                          type="text"
                          placeholder="Bairro"
                        />
                        {errors.neighborhood && (
                          <SpanError>Esse campo deve ser prenchido</SpanError>
                        )}
                      </ContainerInput>
                      <ContainerInput>
                        <input
                          {...register('city', { required: true })}
                          type="text"
                          placeholder="Cidade"
                        />
                        {errors.city && (
                          <SpanError>Esse campo deve ser prenchido</SpanError>
                        )}
                      </ContainerInput>
                      <ContainerInput>
                        <input
                          {...register('stateForm', { required: true, max: 2 })}
                          type="text"
                          placeholder="UF"
                        />
                        {errors.stateForm && (
                          <SpanError>Esse campo deve ser prenchido</SpanError>
                        )}
                      </ContainerInput>
                    </InfoThree>
                  </ContentSectionForm>
                </FormContent>
                <ContainerMethodPayment>
                  <TitleSectionCheckout>
                    <i>
                      <img src={Cipher} alt="" />
                    </i>
                    <div>
                      <h3>Pagamento</h3>
                      <p>
                        O pagamento é feito na entrega. Escolha a forma que
                        deseja pagar
                      </p>
                    </div>
                  </TitleSectionCheckout>
                  <ContainerChoosePaymentMethod>
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
                          <Label htmlFor={id}>
                            <img src={method} alt="" />
                            {name}
                          </Label>
                        </button>
                      )
                    })}
                  </ContainerChoosePaymentMethod>
                </ContainerMethodPayment>
              </ContainerForm>
            </ContainerCheckoutForm>
            <ContainerCheckoutOrder>
              <h2>Cafés selecionados</h2>
              <ContentCheckoutOrder>
                <ContainerItems>
                  <CardItems />
                </ContainerItems>
                <ContainerPricesItems>
                  <ContentPricesItems>
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
                  </ContentPricesItems>
                  <button type="submit">Confirmar pedido</button>
                </ContainerPricesItems>
              </ContentCheckoutOrder>
            </ContainerCheckoutOrder>
          </form>
        </ContainerCheckout>
      )}
    </>
  )
}
