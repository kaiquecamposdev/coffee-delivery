<div align="center">
<h1 align="center">
<img src="./src/layouts/DefaultLayout/components/Header/assets/coffeDelivery.svg" width="100px" />
<br>CoffeeDelivery</h1>
<h3>◦ Brewing convenience, one cup at a time!</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style&logo=Vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/styled--components-DB7093.svg?style&logo=styled-components&logoColor=white" alt="StyledComponents" />

<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style&logo=Axios&logoColor=white" alt="Axios" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/Immer-00E7C3.svg?style&logo=Immer&logoColor=white" alt="Immer" />
<img src="https://img.shields.io/badge/react--hook--form-EC5990.svg?style&logo=React-hook-form&logoColor=white" alt="react-hook-form" />
<img src="https://img.shields.io/badge/Zod-3E67B1.svg?style&logo=Zod&logoColor=white" alt="Zod" />
</p>
<img src="https://img.shields.io/github/license/kaiquecamposdev/CoffeeDelivery?style&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/kaiquecamposdev/CoffeeDelivery?style&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/kaiquecamposdev/CoffeeDelivery?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/kaiquecamposdev/CoffeeDelivery?style&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running CoffeeDelivery](#-running-CoffeeDelivery)
    - [🧪 Tests](#-tests)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The CoffeeDelivery project is a web application that allows users to browse and purchase coffee items. It includes functionalities such as adding items to a shopping cart, selecting different coffee options, managing the contents of the cart, providing delivery information, and selecting a payment method. The project aims to provide a seamless and user-friendly experience for coffee enthusiasts, simplifying the process of ordering their favorite coffee varieties online.

---

## 📦 Features

`-  Add items to cart`

1. Add Items to Cart:
The "Add Items to Cart" functionality is commonly found in online stores and shopping apps. It allows users to select products for purchase and place them in a virtual cart before finalizing the purchase. Here's how this feature works:

2. Navigation: Users visit the shopping website or app and begin looking for products. This involves browsing through categories.

3. Product Selection: When users find a product they want to buy, they typically click on an "Add to Cart" button or icon. This puts the selected item in a virtual cart.

4. Shopping Cart: The products added to the cart are displayed on a separate page, usually called the "Shopping Cart." Users can review the items in the cart, modify quantities, remove products, or continue shopping.

5. Checkout: When users are satisfied with the items in the cart, they can proceed to checkout. This involves providing payment information, delivery address, and reviewing the order before confirming it.

5. Payment: After confirmation, users proceed with payment. They can choose payment options: credit card, debit card, and cash (if available).

6. Purchase Completion: Once the payment is successfully processed, the purchase is completed, and the user is directed to the success page.

`- Autocomplete in form`

1. Enter the ZIP Code: The user enters the ZIP code in the appropriate field of the form.

2. Data Retrieval: As soon as the user enters the ZIP code, the system queries a ZIP code database to retrieve information associated with that ZIP code. This may include the street name, number, neighborhood, city, state, and other address-related information.

3. Auto-Filling: Based on the retrieved information, the system automatically populates the form fields, such as street name, number, neighborhood, city, and state. The user can review and confirm this information.

---


## 📂 Repository Structure

```sh
└── CoffeeDelivery/
    ├── src/
    │   ├── @types/
    │   ├── assets/
    │   ├── contexts/
    │   ├── layouts/
    │   ├── pages/
    │   ├── reducers/
    │   ├── styles/
    │   ├── utils/
    │   ├── App.tsx
    ├   ├── main.tsx
    ├   ├── Router.tsx
    │   └── vite-env.d.ts
    ├── .eslintrc.json
    ├── .gitignore
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vercel.json
    └── vite.config.ts
```


---

## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                         | Summary                                                                                                                                                                                              |
| ---                                                                                          | ---                                                                                                                                                                                                  |
| [vite.config.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/vite.config.ts) | This code defines a Vite configuration file ('vite.config.ts') that sets up a React plugin, resolves aliases for project paths, and configures the server to run on port 3000.                       |
| [index.html](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/index.html)         | The index.html file is a template for a web page that includes links to external resources (favicon, fonts) and a script file (main.tsx) that is responsible for the core functionality of the page. |

</details>

<details closed><summary>Src</summary>

| File                                                                                           | Summary                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---                                                                                            | ---                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [App.tsx](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/App.tsx)             | The code in the App component sets up the core functionalities of the application. It includes the BrowserRouter for handling routing, the ThemeProvider for managing the application's theme, the ShoppingCartContextProvider for managing the shopping cart state, and the Router component for rendering the appropriate page based on the current route. Additionally, it applies global styles via the GlobalStyles component. |
| [Router.tsx](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/Router.tsx)       | The Router module sets up the routing functionality for our React application. It imports the necessary components from react-router-dom and defines the routes for three pages: Home, Checkout, and Success. Each route is nested inside a DefaultLayout component, which provides a common layout for all pages.                                                                                                                  |
| [main.tsx](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/main.tsx)           | This code in the main.tsx file uses ReactDOM to render the App component in a root element on the webpage. It creates a root using createRoot() and then renders the App component inside it, effectively rendering the entire application on the webpage.                                                                                                                                                                          |
| [vite-env.d.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/vite-env.d.ts) | The code in this file references and includes types for the Vite client, enabling smooth integration and interaction with the Vite development server.                                                                                                                                                                                                                                                                              |

</details>

<details closed><summary>Shoppingcart</summary>

| File                                                                                                           | Summary                                                                                                                                                                                                                                                                      |
| ---                                                                                                            | ---                                                                                                                                                                                                                                                                          |
| [actions.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/reducers/shoppingCart/actions.ts) | The code defines action creators for a shopping cart in a Redux store. It includes functions to add, remove, increase, and decrease items in the cart, along with their corresponding action types.                                                                          |
| [reducer.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/reducers/shoppingCart/reducer.ts) | The code is a reducer function for managing the shopping cart state. It handles different actions like adding, increasing, decreasing, and removing items from the cart. The state is updated immutably using the immer library and stored in local storage for persistence. |

</details>

<details closed><summary>Contexts</summary>

| File                                                                                                                        | Summary                                                                                                                                                                                                                                                                                |
| ---                                                                                                                         | ---                                                                                                                                                                                                                                                                                    |
| [ShoppingCartContext.tsx](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/contexts/ShoppingCartContext.tsx) | The code defines a context for a shopping cart feature, providing functionalities such as adding, increasing, decreasing, and removing items from the cart. It also includes data validation for a form related to the shopping cart. The context state is persisted in local storage. |

</details>

<details closed><summary>@types</summary>

| File                                                                                              | Summary                                                                                                                                                                                                                                                                                 |
| ---                                                                                               | ---                                                                                                                                                                                                                                                                                     |
| [styled.d.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/@types/styled.d.ts) | This code defines the type for the theme used in styled components. It imports the default theme and creates a type called ThemeType, which is inferred from the defaultTheme object. This allows for accurate type checking and autocomplete when using styled components with themes. |

</details>

<details closed><summary>Checkout</summary>

| File                                                                                                  | Summary                                                                                                                                                                                                                                                                                                                                         |
| ---                                                                                                   | ---                                                                                                                                                                                                                                                                                                                                             |
| [styles.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/pages/Checkout/styles.ts) | The code contains styled components for the checkout page. It includes styles for the main container, form container, input fields, payment method selection, and order summary. The styles define the layout, dimensions, colors, and typography of the elements in the checkout page.                                                         |
| [index.tsx](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/pages/Checkout/index.tsx) | The Checkout component handles the process of completing an order in the shopping cart. It includes a form for providing the delivery address and selecting a payment method. The component also displays the selected items and calculates the total value of the order. Once the form is submitted, the user is redirected to a success page. |

</details>

<details closed><summary>Carditems</summary>

| File                                                                                                                       | Summary                                                                                                                                                                                                                                                                                       |
| ---                                                                                                                        | ---                                                                                                                                                                                                                                                                                           |
| [styles.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/pages/Checkout/components/CardItems/styles.ts) | The code in this file defines the styles for the card items in the checkout component. It includes styling for the container, buttons, remove button, and a divider. The styles make use of flexbox, gaps, padding, and colors to create a visually appealing and interactive user interface. |
| [index.tsx](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/pages/Checkout/components/CardItems/index.tsx) | The code in this file handles rendering and managing card items in the checkout page. It retrieves the items from the shopping cart context, provides functionality to increase, decrease, and remove items from the cart, and displays the item image, type, quantity, and total price.      |

</details>

<details closed><summary>Containercheckoutempty</summary>

| File                                                                                                                                    | Summary                                                                                                                                                                                                                                     |
| ---                                                                                                                                     | ---                                                                                                                                                                                                                                         |
| [styles.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/pages/Checkout/components/ContainerCheckoutEmpty/styles.ts) | This code defines the styles for an empty shopping cart container in a checkout page. It uses flexbox for layout and applies various font sizes, colors, and transitions to the elements. The code also includes a link styled as a button. |
| [index.tsx](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/pages/Checkout/components/ContainerCheckoutEmpty/index.tsx) | The code defines the ContainerCheckoutEmpty component, which displays a shopping cart icon and a message when the cart is empty. It also provides a link to go back to the home page.                                                       |

</details>

<details closed><summary>Success</summary>

| File                                                                                                 | Summary                                                                                                                                                                                                                          |
| ---                                                                                                  | ---                                                                                                                                                                                                                              |
| [styles.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/pages/Success/styles.ts) | The code defines styled components for a success page. It includes containers for the main content, finished order details, and delivery image. The styles utilize flexbox, grid, responsive design, and various CSS properties. |
| [index.tsx](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/pages/Success/index.tsx) | This code defines the Success component, which is responsible for rendering a success message and order information. It checks if the shopping cart is empty and renders the appropriate components accordingly.                 |

</details>

<details closed><summary>Orderinfo</summary>

| File                                                                                                                      | Summary                                                                                                                                                                                                                                                                                  |
| ---                                                                                                                       | ---                                                                                                                                                                                                                                                                                      |
| [styles.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/pages/Success/components/OrderInfo/styles.ts) | This code defines styled-components for the OrderInfo component in the Success page. It includes styles for container, info, and nested elements such as div, svg, p, and span. The styles specify flexbox layouts, background colors, padding, font sizes, and other visual properties. |
| [index.tsx](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/pages/Success/components/OrderInfo/index.tsx) | This code defines the "OrderInfo" component, which displays delivery and payment information for a successful order. It uses icons, retrieves data from the URL, and renders the information on the UI.                                                                                  |

</details>

<details closed><summary>Home</summary>

| File                                                                                              | Summary                                                                                                                                                                                                                                   |
| ---                                                                                               | ---                                                                                                                                                                                                                                       |
| [styles.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/pages/Home/styles.ts) | This code defines styled components for a home page. It includes containers, titles, and lists for displaying content. The styles are responsive and adapt to different screen sizes.                                                     |
| [index.tsx](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/pages/Home/index.tsx) | The code in the Home component renders a homepage with a coffee-themed design. It includes a title section with a catchy headline, a list of items, and a logo. It also includes a coffee list section with a collection of coffee items. |

</details>

<details closed><summary>Items</summary>

| File                                                                                                               | Summary                                                                                                                                                                                                     |
| ---                                                                                                                | ---                                                                                                                                                                                                         |
| [styles.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/pages/Home/components/Items/styles.ts) | This code defines the style for a list container used in the Home page. It uses styled-components to apply CSS styles such as flex display, gap between items, background color, font size, and text color. |
|                                                                                                                                                                                                  |

</details>

<details closed><summary>Coffelist</summary>

| File                                                                                                                   | Summary                                                                                                                                                                                                                                                                                                                                           |
| ---                                                                                                                    | ---                                                                                                                                                                                                                                                                                                                                               |
| [styles.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/pages/Home/components/CoffeList/styles.ts) | The code in this file defines the styled components used in the CoffeeList component of the Home page. It includes the styles for the card container, card content, coffee card, options container, price container, buy container, counter container, and shopping cart button.                                                                  |
| [index.tsx](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/pages/Home/components/CoffeList/index.tsx) | The code in the CoffeList component is responsible for rendering a list of coffees with their respective options, prices, descriptions, and quantities. Users can increase or decrease the quantity of a coffee item, and add it to a shopping cart. This component utilizes the ShoppingCartContext to handle adding items to the shopping cart. |

</details>

<details closed><summary>Defaultlayout</summary>

| File                                                                                                         | Summary                                                                                                                                                                                                                            |
| ---                                                                                                          | ---                                                                                                                                                                                                                                |
| [index.tsx](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/layouts/DefaultLayout/index.tsx) | The code in this file exports the DefaultLayout component, which includes a Header, an Outlet (used for routing), and a Footer. It acts as the main layout for the application, rendering these components in the specified order. |

</details>

<details closed><summary>Cartbuttonempty</summary>

| File                                                                                                                                    | Summary                                                                                                                                                                                                                                      |
| ---                                                                                                                                     | ---                                                                                                                                                                                                                                          |
| [styles.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/layouts/DefaultLayout/components/CartButtonEmpty/styles.ts) | This code defines the styled component for an empty cart button container. It uses flexbox to center the content, sets a background color, padding, and border radius.                                                                       |
| [index.tsx](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/layouts/DefaultLayout/components/CartButtonEmpty/index.tsx) | The code in this file is responsible for rendering an empty cart button. It uses the ShoppingCart icon from the @phosphor-icons/react library and applies styling using the default theme. The button is displayed with a yellow fill color. |

</details>

<details closed><summary>Cartbuttonfull</summary>

| File                                                                                                                                   | Summary                                                                                                                                                                                                                                                                                                                                                   |
| ---                                                                                                                                    | ---                                                                                                                                                                                                                                                                                                                                                       |
| [styles.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/layouts/DefaultLayout/components/CartButtonFull/styles.ts) | The code defines the styles for a Cart Button component that is part of a Default Layout. It sets the background color and cursor style. It also includes a counter for the number of items in the cart, positioned on the top-right corner of the button. The counter has a circular shape and displays the number using a specific font size and color. |
| [index.tsx](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/layouts/DefaultLayout/components/CartButtonFull/index.tsx) | The code defines a component called CartButtonFull that renders a shopping cart icon and a counter displaying the number of items in the shopping cart. It uses the ShoppingCartContext to access the shopping cart state and includes a link to the checkout page. The component is styled using CSS-in-JS.                                              |

</details>

<details closed><summary>Header</summary>

| File                                                                                                                           | Summary                                                                                                                                                                                                         |
| ---                                                                                                                            | ---                                                                                                                                                                                                             |
| [styles.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/layouts/DefaultLayout/components/Header/styles.ts) | This code provides styled components for the header section of a default layout. It includes a container for the header, the main content area, navigation options, and a locale container with custom styling. |
|                                                                                                                                                                                    |

</details>

<details closed><summary>Footer</summary>

| File                                                                                                                           | Summary                                                                                                                                                                                                                          |
| ---                                                                                                                            | ---                                                                                                                                                                                                                              |
| [styles.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/layouts/DefaultLayout/components/Footer/styles.ts) | This code defines the styles for the footer component in a default layout. It includes containers for the footer, footer content, options, and locale. The styles specify the layout, colors, and typography for these elements. |
|                                                                                                                                                                                                     |

</details>

<details closed><summary>Utils</summary>

| File                                                                                                         | Summary                                                                                                                                                                                                                                                                                           |
| ---                                                                                                          | ---                                                                                                                                                                                                                                                                                               |
| [formatCurrency.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/utils/formatCurrency.ts) | The code in the `formatCurrency` function formats a numeric value into a currency format specifically for the Brazilian Real (BRL) using the `Intl.NumberFormat` API. The resulting formatted value is returned as a string.                                                                      |
| [paymentMethods.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/utils/paymentMethods.ts) | In the code `paymentMethods.ts`, a `paymentMethods` array is exported. It contains objects representing different payment methods such as credit card, debit card, and cash. Each object has properties for the name, method (imported icons), and an ID.                                         |
| [coffeList.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/utils/coffeList.ts)           | This code defines a list of different coffee options, including their images, types, descriptions, prices, quantities, and totals. Each coffee can have various options like "tradicional" or "com leite." The code is used in the shopping cart context to display and manage coffee selections. |
| [itemsList.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/utils/itemsList.ts)           | The code in itemsList.ts exports an array of objects representing different items. Each object has an Icon component, a color value, and a content string. These items can be used to display various features, such as secure shopping, intact packaging, fast delivery, and fresh coffee.       |

</details>

<details closed><summary>Styles</summary>

| File                                                                                          | Summary                                                                                                                                                                                                                                                                                                               |
| ---                                                                                           | ---                                                                                                                                                                                                                                                                                                                   |
| [Global.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/styles/Global.ts) | The code in Global.ts creates global styles for the application. It sets default styles for elements, such as resetting margins, borders, and fonts. It also defines styles for disabled elements, focus styles, body background, font, and scrollbar styles. This ensures consistent styling across the application. |

</details>

<details closed><summary>Themes</summary>

| File                                                                                                   | Summary                                                                                                                                                                                                                                   |
| ---                                                                                                    | ---                                                                                                                                                                                                                                       |
| [default.ts](https://github.com/kaiquecamposdev/CoffeeDelivery/blob/main/src/styles/themes/default.ts) | The code defines a default color theme for a project. It includes various shades of gray, yellow, red, and purple, each assigned a specific hex color code. The theme can be used to maintain consistency in the project's visual design. |

</details>

---

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- styled-components.vscode-styled-components`

`- dbaeumer.vscode-eslint`

1. Open Visual Studio Code on your computer.

2. CTRL + SHIFT + X, to open the extensions menu

3. At the top there is a search box. Type "styled-components.vscode-styled-components" and press "Enter".

4. You will see the "styled-components.vscode-styled-components" extension in the list of results. Click the "Install" button next to it.

5. Now, go back to the search box and type “dbaeumer.vscode-eslint”. Press "Enter".

6. You will see the extension "dbaeumer.vscode-eslint" in the list of results. Click the "Install" button next to it.

The extensions are installed and ready to use!

### 🔧 Installation

1. Clone the CoffeeDelivery repository:
```sh
git clone https://github.com/kaiquecamposdev/CoffeeDelivery
```

2. Change to the project directory:
```sh
cd CoffeeDelivery
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Running CoffeeDelivery

```sh
npm run build && node dist/main.js
```

### 🧪 Tests
```sh
npm test
```

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.

2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.

3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).

```sh
git checkout -b new-feature-branch
```

4. Make changes to the project's codebase.

5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.

```sh
git commit -m 'Implemented new feature.'
```

6. Push your changes to your forked repository on GitHub using the following command.

```sh
git push origin new-feature-branch
```

7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.

The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `MIT` License. See the [MIT License](LICENSE) file for additional info.

---

## 👏 Acknowledgments

`- ℹ️ Gratitude is a gift that I offer to the universe, without a specific recipient, but with a heart full of appreciation for life.`

---
[↑ Return](#Top)

