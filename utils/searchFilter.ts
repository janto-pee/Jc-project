// state universities polytechnics colleges
export const searchFilter = [
  {
    item: [
      { name: "Abia", value: "" },
      { name: "Adamawa", value: "" },
      { name: "Akwa Ibom", value: "" },
      { name: "Anambra", value: "" },
      { name: "Bauchi", value: "" },
      { name: "Bayelsa", value: "" },
      { name: "Benue", value: "" },
      { name: "Borno", value: "" },
      { name: "Cross River", value: "" },
      { name: "Delta", value: "" },
      { name: "Ebonyi", value: "" },
      { name: "Edo", value: "" },
      { name: "Ekiti", value: "" },
      { name: "Enugu", value: "" },
      { name: "Gombe", value: "" },
      { name: "Imo", value: "" },
      { name: "Jigawa", value: "" },
      { name: "Kaduna", value: "" },
      { name: "Kano", value: "" },
      { name: "Katsina", value: "" },
      { name: "Kebbi", value: "" },
      { name: "Kogi", value: "" },
      { name: "Kwara", value: "" },
      { name: "Lagos", value: "" },
      { name: "Nasarawa", value: "" },
      { name: "Niger", value: "" },
      { name: "Ogun", value: "" },
      { name: "Ondo", value: "" },
      { name: "Osun", value: "" },
      { name: "Oyo", value: "" },
      { name: "Plateau", value: "" },
      { name: "Rivers", value: "" },
      { name: "Sokoto", value: "" },
      { name: "Taraba", value: "" },
      { name: "Yobe", value: "" },
      { name: "Zamfara", value: "" },
    ],
    placeholder: "State",
    queryName: "localstate",
    label: "State",
  },
  // {
  //   item: [
  //     { name: "OAU", value: "oau" },
  //     { name: "AAUA", value: "aaua" },
  //     { name: "FUNAAB", value: "funaab" },
  //   ],
  //   placeholder: "University",
  //   queryName: "university",
  // },
  // {
  //   item: [
  //     { name: "Kadpoly", value: "kadpoly" },
  //     { name: "Gateway poly", value: "gateway" },
  //     { name: "Oko poly", value: "oko" },
  //   ],
  //   placeholder: "Polytechnic",
  //   queryName: "polytechnic",
  // },
  // {
  //   item: [{ name: "Adeyemi College", value: "adeyemi" }],
  //   placeholder: "College",
  //   queryName: "college",
  // },
  {
    item: [{ name: "Law", value: "law" }],
    placeholder: "Faculty",
    queryName: "faculty",
  },
  {
    item: [
      { name: "University", value: "university" },
      { name: "Polytechnic", value: "polytechnic" },
      { name: "college", value: "college" },
    ],
    placeholder: "Institution",
    queryName: "institution",
  },
];

export const getFilterValues = (filterValues: any) => {
  const {
    localstate,
    university,
    polytechnic,
    college,
    secondary,
    othersdegrees,
  } = filterValues;

  const values = [
    { name: "localstate", value: localstate },
    { name: "university", value: university },
    { name: "polytechnic", value: polytechnic },
    { name: "college", value: college },
    { name: "secondary", value: secondary },
    { name: "othersdegrees", value: othersdegrees },
  ];
  return values;
};

export const localstate = [
  { name: "Abia", value: "" },
  { name: "Adamawa", value: "" },
  { name: "Akwa Ibom", value: "" },
  { name: "Anambra", value: "" },
  { name: "Bauchi", value: "" },
  { name: "Bayelsa", value: "" },
  { name: "Benue", value: "" },
  { name: "Borno", value: "" },
  { name: "Cross River", value: "" },
  { name: "Delta", value: "" },
  { name: "Ebonyi", value: "" },
  { name: "Edo", value: "" },
  { name: "Ekiti", value: "" },
  { name: "Enugu", value: "" },
  { name: "Gombe", value: "" },
  { name: "Imo", value: "" },
  { name: "Jigawa", value: "" },
  { name: "Kaduna", value: "" },
  { name: "Kano", value: "" },
  { name: "Katsina", value: "" },
  { name: "Kebbi", value: "" },
  { name: "Kogi", value: "" },
  { name: "Kwara", value: "" },
  { name: "Lagos", value: "" },
  { name: "Nasarawa", value: "" },
  { name: "Niger", value: "" },
  { name: "Ogun", value: "" },
  { name: "Ondo", value: "" },
  { name: "Osun", value: "" },
  { name: "Oyo", value: "" },
  { name: "Plateau", value: "" },
  { name: "Rivers", value: "" },
  { name: "Sokoto", value: "" },
  { name: "Taraba", value: "" },
  { name: "Yobe", value: "" },
  { name: "Zamfara", value: "" },
];
