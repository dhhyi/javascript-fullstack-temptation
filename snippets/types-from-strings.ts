type Area = "browsing" | "checkout" | "login";
type Errors = "not-found" | "unauthorized";

type AreaError = `${Uppercase<Area>}:${Errors}`;

type FilteredAreaError = Exclude<AreaError,
    "BROWSING:unauthorized" | "CHECKOUT:not-found">;

type SpecialAreas = Extract<Area, 'browsing' | 'login'>;
type FilteredAreaError2 = Extract<FilteredAreaError,
    `${Uppercase<SpecialAreas>}:${Errors}`>;
