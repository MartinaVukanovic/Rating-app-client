import { inRange } from 'lodash';

export default function validateString(str, min, max) {
  if (!inRange(str.length, min, max)) {
    return false;
  }
  return true;
}
