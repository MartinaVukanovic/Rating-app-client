export default function daysTranslated() {
  if (localStorage.getItem('translation') === 'ba') {
    return ['Po', 'Ut', 'Sr', 'Če', 'Pe', 'Su', 'Ne'];
  }
  if (localStorage.getItem('translation') === 'hi') {
    return ['प्रति', 'मंग', 'बुधव', 'गुरू', 'शुक्र', 'शनि', 'रविवा'];
  }
  return ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
}
