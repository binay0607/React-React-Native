import React from 'react';
import RNText, {IRNTextProps} from '@freakycoder/react-native-custom-text';
/**
 * ? Local Imports
 */

interface ITextWrapperProps extends IRNTextProps {
  children?: React.ReactNode;
}

const TextWrapper: React.FC<ITextWrapperProps> = ({children, ...rest}) => {
  return <RNText {...rest}>{children}</RNText>;
};

export default TextWrapper;
