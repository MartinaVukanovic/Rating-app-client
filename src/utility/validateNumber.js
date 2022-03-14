import { isInteger, inRange } from 'lodash';

export default function validateNumber(number, min, max) {
  if (!isInteger(Number(number)) || !inRange(number, min, max)) {
    return false;
  }
  return true;
}
