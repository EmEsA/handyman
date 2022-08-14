import { CenteredText, StyledButton } from './button.styled';

export const Button = ({
  title,
  backgroundVaraint,
  textVariant,
  disabled,
  size,
  ...props
}) => (
  <StyledButton
    backgroundVaraint={backgroundVaraint}
    isDisabled={disabled}
    disabled={disabled}
    size={size}
    {...props}
  >
    <CenteredText size={size} textVariant={textVariant}>
      {title}
    </CenteredText>
  </StyledButton>
);
