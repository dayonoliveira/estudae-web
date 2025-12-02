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
};

export const Login = ({ setFormType }: LoginType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    const fakeUser = {
      name: "Ticiane Vasconcelos",
      email: "ticiane777@gmail.com",
      institution: "Escola Parque Estudantil Guadalajara",
      role: "volunteer",
      phone: "98232151421",
    };

    localStorage.setItem("user", JSON.stringify(fakeUser));
    navigate("/home");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 4,
        padding: { xs: 2, md: 0 },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.4rem", sm: "3.5rem" },
          fontWeight: 800,
          textAlign: "center",
        }}
      >
        ESTUDAE
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "100%",
          maxWidth: 420,
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: 12,
          padding: 24,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Login
        </Typography>

        <TextField
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

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Entrar
        </Button>
      </form>

      <Typography>
        Ainda não possui uma conta?{" "}
        <Button
          color="inherit"
          onClick={() => setFormType?.("register")}
        >
          Criar Conta
        </Button>
      </Typography>
    </Box>
  );
}
