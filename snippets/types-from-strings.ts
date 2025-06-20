type Area = "browsing" | "checkout" | "login";
type Errors = "not-found" | "unauthorized";

type AreaError = `${Area}:${Errors}`;

type FilteredAreaError = Exclude<AreaError,
    "browsing:unauthorized" | "checkout:not-found">;

type FilteredAreaError2 = Extract<FilteredAreaError,
    `${Extract<Area, 'browsing' | 'login'>}:${Errors}`>;
