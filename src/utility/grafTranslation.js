export default function grafTranslation() {
  if (localStorage.getItem('translation') === 'ba') {
    return ['Jako zadovoljan', 'Zadovoljan', 'Nezadovoljan', 'Jako nezadovoljan', 'Razočaran'];
  }
  if (localStorage.getItem('translation') === 'hi') {
    return ['बहुत संतुष्ट', 'संतुष्ट', 'असंतुष्ट', 'बहुत असंतुष्ट', 'निराश'];
  }
  return ['Very satisfied', 'Satisfied', 'Dissatisfied', 'Very dissatisfied', 'Bad'];
}
