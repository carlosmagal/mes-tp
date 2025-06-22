import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="-pt-4 pb-2 text-center text-sm text-zinc-500">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.5 }}
      >
        Projeto criado por:
        <br />
        Carlos Magalhães Silva /
        Diogo do Nascimento Rodrigues /
        Henrique César Alves de Souza
      </motion.div>
    </footer>
  );
};
