import './SubmitButton.css'

export const SubmitButton = ({children, ...rest}) => 
  <button type="submit" {...rest}>{ children }</button>