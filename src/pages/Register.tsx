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
  Radio
} from "@mui/material";
import { formatPhone } from "../utils/formatPhone";

const registerSchema = yup.object({
  fullName: yup.string().required("Nome completo obrigatório"),
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  phone: yup.string().required("Telefone obrigatório"),
  institution: yup.string().required("Instituição obrigatória"),
  role: yup.string().oneOf(["aluno", "doador"], "Selecione um tipo").required(),
  password: yup.string().required("Senha obrigatória"),
});

type RegisterFormData = {
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  role: "aluno" | "doador";
  password: string;
};

type RegisterType = {
  setFormType?: React.Dispatch<React.SetStateAction<"login" | "register">>;
}

export const Register = ({ setFormType }: RegisterType) => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Dados enviados:", data);
  };

  return (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "12px",
        width: "420px",
        display: "flex",
        flexDirection: "column",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, textAlign: "center", mb: 2 }}
      >
        Obrigado por fazer parte 💙
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center", mb: 3 }}
      >
        Juntos, podemos transformar vidas através da educação.
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column"
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
        label="Telefone para contato"
        fullWidth
        margin="normal"
        {...register("phone")}
        onChange={(e) => {
            const formatted = formatPhone(e.target.value);
            e.target.value = formatted;
        }}
        error={!!errors.phone}
        helperText={errors.phone?.message}
        />

        <TextField
          label="Escola / Instituição"
          fullWidth
          margin="normal"
          {...register("institution")}
          error={!!errors.institution}
          helperText={errors.institution?.message}
        />

        <FormControl margin="normal">
          <FormLabel>Você é:</FormLabel>
          <RadioGroup row {...register("role")}>
            <FormControlLabel value="aluno" control={<Radio />} label="Aluno" />
            <FormControlLabel value="doador" control={<Radio />} label="Doador" />
          </RadioGroup>
          {errors.role && (
            <Typography variant="caption" color="error">
              {errors.role.message}
            </Typography>
          )}
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

        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Criar Conta
        </Button>

        <Typography sx={{ mt: 2, textAlign: "center" }}>
          Já possui uma conta?{" "}
          <Button color="inherit" onClick={() => setFormType && setFormType("login")}>
            Entrar
          </Button>
        </Typography>
      </form>
    </Box>
  );
}
