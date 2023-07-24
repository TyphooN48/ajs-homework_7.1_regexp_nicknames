export default class Validator {
  // возврящает 'true' в случае корректного имени или 'false' в случае не корректного имени
  static validateUsername(username) {
    const ifMistake = [
      /[^A-Za-z0-9_-]/.test(username), // проверка на на наличие других символов кроме латинских букв, -, _ и цифр (0-9) (если есть, значение true)
      /\d{3}/.test(username), // проверка на наличие 3х цифр подряд (если есть, значение true)
      /^(\d|_|-)/.test(username), // проверка на цифру, -, _ в начале (если есть, значение true)
      /(\d|_|-)$/.test(username), // проверка на цифру, -, _ в конце (если есть, значение true)
    ];

    if (ifMistake.includes(true)) {
      return false;
    }
    return true;
  }
}
