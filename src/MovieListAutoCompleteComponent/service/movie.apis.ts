import { Movie } from "../../models/movie";

const arrayOne: Movie[] = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

const arrayTwo: Movie[] = [
  { title: "The Lord of the Rings", year: 2003 },
  { title: "The Good, the Bad", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings", year: 2001 },
  { title: "Star Wars: Episode V", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings", year: 2002 },
  { title: "One Flew Over", year: 1975 },
];

const arrayThree: Movie[] = [
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars: Episode IV", year: 1977 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
];

export function getArrayOneList() {
  return arrayOne;
}

export function getArrayTwoList() {
  return arrayTwo;
}

export function getArrayThreeList() {
  return arrayThree;
}
