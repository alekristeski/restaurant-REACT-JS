interface Props {
  id: number;
  author: string;
  comment: string;
  stars: number;
}
export const calcAvgReviewList = (reviewsList: Props[]) => {
  if (reviewsList?.length === 0) {
    return "no rating given";
  } else {
    const initialValue = 0;
    const avgRating = reviewsList
      ?.map((review) => {
        return review.stars;
      })
      .reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue / reviewsList.length,
        initialValue,
      );

    return avgRating.toFixed(1);
  }
};
