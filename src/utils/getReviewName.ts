const getReviewName = (reviewCount: number): string => {
  const stringCount = reviewCount.toString();
  switch (stringCount[stringCount.length - 1]) {
    case "1":
      return "отзыв";
    case "2":
    case "3":
    case "4":
      return "отзыва";
    default:
      return "отзывов";
  }
};

export default getReviewName;
