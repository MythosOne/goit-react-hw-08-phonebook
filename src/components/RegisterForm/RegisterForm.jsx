import { Formik } from 'formik';
import { AddRegisterForm, Label, FormikInput, RegButton } from './RegisterForm.styled';

export const RegisterForm = () => {

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
            <AddRegisterForm>
                <Label>
                    UserName
                    <FormikInput
                        type="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                    />
                </Label>
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
                        name="password"
                        placeholder="Enter your password"
                        required
                    />
                </Label>
                <RegButton type="submit">Register</RegButton>
            </AddRegisterForm>
        </Formik>
    );
};
