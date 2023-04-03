async function order() {
  try {
    await abc;
  } catch (err) {
    console.log("abc does not exist", err);
  } finally {
    console.log("runs code anyway");
  }
}
order().then(() => {
  console.log("jcievdbud");
});
