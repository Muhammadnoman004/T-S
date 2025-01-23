const Form = () => {
  return (
    <div>
      <form>
        <input placeholder="First name" type="text" name="" id="" />
        <br />
        <input placeholder="last name" type="text" name="" id="" />
        <br />
        <textarea placeholder="feedback" name="" id=""></textarea>
        <br />
        <div className="radioDiv">
          <input type="radio" name="" id="" />
          <label htmlFor="">frontend</label>
          <br />
          <input type="radio" name="" id="" />
          <label htmlFor="">backend</label>
          <br />
          <input type="radio" name="" id="" />
          <label htmlFor="">full stack</label>
          <br />
          <input type="radio" name="" id="" />
          <label htmlFor="">wordpress</label>
          <br />
        </div>

        <input type="file" name="" id="" />

        <div className="checkboxDiv">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">wordpress</label>
          <br />
          <input type="checkbox" name="" id="" />
          <label htmlFor="">full stack</label>
          <br />
          <input type="checkbox" name="" id="" />
          <label htmlFor="">backend</label>
          <br />
          <input type="checkbox" name="" id="" />
          <label htmlFor="">frontend</label>
          <br />
        </div>

        <div>
          <button>submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
