import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"

interface State {
  amount: string
  isFocused: boolean
}

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class KarinaInputCcy extends StreamlitComponentBase<State> {
  public state = { amount: "", isFocused: false }

  public render = (): ReactNode => {
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`. Here, we access the "name" arg.
    const name = this.props.args["name"]
    const label = this.props.args["label"]

    // Streamlit sends us a theme object via props that we can use to ensure
    // that our component has visuals that match the active theme in a
    // streamlit app.
    const { theme } = this.props
    const style: React.CSSProperties = {}

    // Maintain compatibility with older versions of Streamlit that don't send
    // a theme object.
    if (theme) {
      // Use the theme object to style our button border. Alternatively, the
      // theme style is defined in CSS vars.

    }

    // Show a button and some text.
    // When the button is clicked, we'll increment our "numClicks" state
    // variable, and send its new value back to Streamlit, where it'll
    // be available to the Python program.
    return (
      <span className="input-group-text">
        {label} &nbsp;
        <input type="text" name={name}
          style={style}
          className="form-control"
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onChange={this.onChange}
          value={this.state.amount}
          disabled={this.props.disabled}
        >
        </input>
      </span>
    )
  }

  private onBlur = (): void => {
    
    let value = this.state.amount;
    // Regular expression to only allow numbers, the letters k, m, b, comma, and dollar sign.
    const pattern = /^[0-9kmb,.$]*$/i;

    // If the value doesn't match the pattern, return without updating state.
    if (!pattern.test(value)) {
      return;
    }
    
    if (value.endsWith('k')) {
      value = (parseFloat(value) * 1000).toString();
    } else if (value.endsWith('m')) {
      console.log(value)
      value = (parseFloat(value) * 1000000).toString();
    } else if (value.endsWith('b')) {
      value = (parseFloat(value) * 1000000000).toString();
    }
    this.setState({ amount: value, isFocused: false },
      () => Streamlit.setComponentValue(this.state.amount)
    );
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  
    this.setState({ amount: formatter.format(parseFloat(value.replace(/[$,]/g, ''))), isFocused: false },
      () => Streamlit.setComponentValue(this.state.amount)
    );
  }

  private onFocus = (): void => {
    this.setState({ isFocused: true });
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ amount: e.target.value },
      () => Streamlit.setComponentValue(this.state.amount)
    );
  }
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(KarinaInputCcy)
