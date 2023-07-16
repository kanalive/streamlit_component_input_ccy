# Streamlit Customised Currency Input Field

Welcome to the Streamlit Customised Currency Input Field project. This project provides a customised input field for Streamlit applications that is designed to handle large currency values.

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

