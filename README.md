# Streamlit Customised Currency Input Field

Welcome to the Streamlit Customised Currency Input Field project. This project provides a customised input field for Streamlit applications that is designed to handle large currency values.

![Screenshot of the input field](./Screenshot.png)

## Features

Currently, the component has the following features:

- Conversion of shorthand notations:
  - 'k' is converted to thousand (1,000)
  - 'm' is converted to million (1,000,000)
  - 'b' is converted to billion (1,000,000,000)
- Input field formatting: The input field is formatted as a currency field, including the $ sign.

## Installation

To use this package, download the .whl file from the `dist` directory in the repository. Install it by running:
```
pip install /path_to_your_file/your_file.whl
```

## Usage
Here's a simple Streamlit script that uses the custom currency input field:
```
import streamlit as st
import karina_input_ccy as kinput

st.title("Test project")
amount = kinput.karina_input_ccy(name="test_field", label="Currency Input Field (AUD)")
st.write(amount)
```

## Extending This Component

### Development

To set the application to development mode, change `_RELEASE` to `False` in the `__init__.py` file found in the `/karina_input_ccy` directory.

To start the web server for the React component, open a command prompt, navigate to your local directory `/karina_input_ccy/frontend`, and enter the command `npm start`.

To start the web server that hosts the Streamlit code for testing changes, open a different command prompt, navigate to your local directory `/karina_input_ccy`, and enter the command `streamlit run __init__.py`.

Modify the `KarinaInputCcy.tsx` file to add more features. Then, you can test your newly implemented functionalities.

### Build

To build the project, first navigate to the `/karina_input_ccy/frontend` directory in a command prompt and enter `npm run build`.

Afterwards, set `_RELEASE` to `True` in the `__init__.py` file under `/karina_input_ccy`.

Next, navigate to the parent directory where the `setup.py` file is located and run the command `python setup.py sdist bdist_wheel`. This will update the `.whl` and `.gz` files in the `dist` folder.

Finally, commit your changes and create a pull request.