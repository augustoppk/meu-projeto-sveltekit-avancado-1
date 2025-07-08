/** @type {import('./$types').PageServerLoad} */
export function load() {
  return {
    mensagem: 'Seja bem-vindo!',
    data: new Date().toLocaleString()
  };
}
