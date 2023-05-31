

export enum PatternValidation {
    CommaNotAllowed = "^[^,]+$",
    PanCard = '[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}',
    mobileNumber = '^[0-9]{10}$',
    email = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}',
    cinNumber = '^([LUu]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$',
    gstNumber = '[0-9]{2}[A-Za-z]{5}[0-9]{4}[a-zA-Z][0-9]{1}[a-zA-Z]{1}[0-9]{1}'


   }