const promise = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', {
  method: 'POST',
});
const id = await promise.text();

export default id;