
try {
  throw new Error('This is an error')
} catch (error) {
  throw error
} finally {
  console.log('Finaly');
}