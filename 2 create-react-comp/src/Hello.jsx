function Hello() {

  let myName = 'Yash';
  let number = 234;
  let fullName = () => {
    return 'Yash Tibadiya';
  }

  return <h3>
    Hello, this is future speaking. I am {myName}
    MessageNo: {number}, I am {fullName()}
  </h3>
}

export default Hello;