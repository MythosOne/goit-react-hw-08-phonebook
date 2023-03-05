import { Formik } from 'formik';
import { AddLoginForm, Label, FormikInput, LogButton } from './LoginForm.styled';

export const LoginForm = () => {

    const handleSubmit = () => {
    
    };

    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            onSubmit={handleSubmit}
        >
            <AddLoginForm>
                <Label>
                    Email
                    <FormikInput
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                </Label>
                <Label>
                    Password
                    <FormikInput
                        type="text"
                        name="eassword"
                        placeholder="Enter your password"
                        required
                    />
                </Label>
                <LogButton type="submit">Log In</LogButton>
            </AddLoginForm>
        </Formik>
    );
};
