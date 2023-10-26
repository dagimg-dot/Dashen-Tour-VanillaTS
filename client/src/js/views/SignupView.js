class SignupView {
  generateMarkup() {
    return `
        <div>
            <form class="form-container" id="form" onsubmit="addUser" method="post">


                <!-- full name -->
                <label for="full-name">Full Name</label>
                <div class="inp">

                    <input type="text" id="full-name" name="full-name" placeholder="Enter your full name" minlength="5"
                        maxlength="100" title="no need to use numbers and symbols use only characters" required />
                </div>

                <!-- email  -->
                <label for="email">Email</label>
                <div class="inp">
                    <input type="email" id="email" name="email" placeholder="someone123@example.com"
                        title="enter a valid email address eg.someone1234@gmail.com" required />
                </div>


                <!-- phone number -->
                <label for="phone-number">Phone Number</label>
                <div class="inp">
                    <input type="tel" id="phone-number" name="phone-number"
                        placeholder="country code-number  eg. +251 911101010"
                        title="please enter the country code and space and the rest digits" required />
                </div>

                <!--address -->
                <label for="address">Address</label>
                <div class="inp">
                    <input type="text" id="address" name="address" placeholder="Enter your city" required minlength="3"
                        maxlength="50" title="please enter 3 or more than characters" />
                </div>


                <!-- your password-->
                <label for="password-one">Password</label>
                <div class="inp">
                    <input name="password" type="password" id="password-one"
                        placeholder="enter your password with min of 8 characters  " required
                        title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number." />
                </div>


                <!-- confirm password -->
                <label for="password-two">Confirm Password</label>
                <div class="inp">
                    <input name="ConfirmPassword" type="password" id="password-two" placeholder="confirm password"
                        required />
                </div>



                <!-- submit button -->
                <button type="submit" class="signup-button">Sign Up</button>
                <span class="signup-link"> Already have an account? <a href="#">Login</a></span>
            </form>
        </div>
      `;
  }
}

export default new SignupView;
