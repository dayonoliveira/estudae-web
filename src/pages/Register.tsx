import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { formatPhone } from "../utils/formatPhone";

const registerSchema = yup.object({
  fullName: yup.string().required("Nome completo obrigatório"),
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  phone: yup.string().required("Telefone obrigatório"),
  institution: yup.string().required("Instituição obrigatória"),
  role: yup.string().required("Selecione uma opção"),
  password: yup.string().required("Senha obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
    .required("Confirmação obrigatória"),
});

type RegisterFormData = {
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  role: string;
  password: string;
  confirmPassword: string;
};

type RegisterProps = {
  setFormType?: React.Dispatch<React.SetStateAction<"login" | "register">>;
};

export const Register = ({ setFormType }: RegisterProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    localStorage.setItem("user", JSON.stringify(data));
    setFormType?.("login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: 2, md: 4 },
        gap: 3,
      }}
    >
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Criar Conta
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "100%",
          maxWidth: 420,
          background: "rgba(255,255,255,0.05)",
          padding: 24,
          borderRadius: 12,
        }}
      >
        <TextField
          label="Nome completo"
          fullWidth
          margin="normal"
          {...register("fullName")}
          error={!!errors.fullName}
          helperText={errors.fullName?.message}
        />

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Telefone"
          fullWidth
          margin="normal"
          {...register("phone")}
          onChange={(e) => (e.target.value = formatPhone(e.target.value))}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />

        <TextField
          label="Instituição"
          fullWidth
          margin="normal"
          {...register("institution")}
          error={!!errors.institution}
          helperText={errors.institution?.message}
        />

        <FormControl fullWidth margin="normal">
          <FormLabel>Você é:</FormLabel>
          <RadioGroup row {...register("role")}>
            <FormControlLabel value="aluno" control={<Radio />} label="Aluno" />
            <FormControlLabel value="doador" control={<Radio />} label="Doador" />
          </RadioGroup>
        </FormControl>

        <TextField
          label="Senha"
          type="password"
          fullWidth
          margin="normal"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <TextField
          label="Confirmar senha"
          type="password"
          fullWidth
          margin="normal"
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />

        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
          Registrar
        </Button>

        <Typography sx={{ mt: 2 }}>
          Já possui uma conta?{" "}
          <Button onClick={() => setFormType?.("login")}>Login</Button>
        </Typography>
      </form>
    </Box>
  );
};
