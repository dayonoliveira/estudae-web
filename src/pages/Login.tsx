import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object({
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

type LoginFormData = {
  email: string;
  password: string;
};

type LoginType = {
  setFormType?: React.Dispatch<React.SetStateAction<"login" | "register">>;
}

export default function Login({ setFormType }: LoginType) {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormData) => {
    const fakeUser = {
      name: "Thiago Sousa",
      email: "emailthiagoparateste@gmail.com",
      institution: "Escola Dayon de Linguas Estrangeiras",
      role: "volunteer",
      phone: "11111111111",
    }

    localStorage.setItem("user", JSON.stringify(fakeUser))
    navigate("/home")
  };

  return (
    <Box     
        style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "40px"
    }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: "2.75rem", sm: "3.5rem" },
            fontWeight: 800,
            letterSpacing: -1,
            textAlign: "center",
          }}
        >
          ESTUDAE
        </Typography>
        
        <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "12px",
                width: "420px",
                display: "flex",
                flexDirection: "column"
            }}>
                <Typography variant="h4">
                    Login
                </Typography>
            <TextField
            sx={{color: 'white'}}
            label="Email"
            fullWidth
            margin="normal"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            />

            <TextField
            label="Senha"
            type="password"
            fullWidth
            margin="normal"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            />
            <Button 
            sx={{fontSize: "20px"}} 
            color="info" 
            type="submit">
              Entrar
            </Button>
        </form>

        <Box>
            <Typography>
                Ainda não possui uma conta?
                {" "}
                <Button color="inherit" onClick={() => setFormType && setFormType("register")
                  }>
                    Criar Conta
                </Button>
            </Typography>
        </Box>
    </Box>
  );
}

