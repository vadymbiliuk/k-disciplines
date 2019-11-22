import React from 'react';
import { Formik } from 'formik';
import { SignUpStyled } from './Style';
import { Form } from '../../Shared/Form';
import { Input } from '../../Shared/Input';
import { Button } from '../../Shared/Button';
import { FlexWrapper } from '../../Shared/FlexWrapper';

export interface ISignUpProps {
  
}

export const SignUp: React.FC<ISignUpProps> = ({ }) => {
  return (
    <SignUpStyled>
      <FlexWrapper>
        <Formik 
          initialValues={{

          }}
          onSubmit={() => ({

          })}
          render={() => 
            <Form>
              <FlexWrapper flexDirection="column">
                <Input name="email" placeholder="Электронная почта" style={{ margin: '5px' }}/>

                <Input name="password" placeholder="Пароль" style={{ margin: '5px' }}/>

                <Input name="first-name" placeholder="Имя" style={{ margin: '5px' }}/>

                <Input name="last-name" placeholder="Фамилия" style={{ margin: '5px' }}/>

                <FlexWrapper>
                  <Button>
                    Зарегистрироваться
                  </Button>
                </FlexWrapper>
              </FlexWrapper>
            </Form>
          }
        />
      
      </FlexWrapper>
    </SignUpStyled>
  );
};
