export function getImageUrl(person: { imageId: string }) {
  return (
    'https://react.dev/images/docs/scientists/' +
    person.imageId +
    's.jpg'
  );
}
