export class UserService {
  static apiUrl = process.env.REACT_APP_SERVER_BASE_URL;

  /**
   * Fetches and returns a list of all the users of the application
   * @returns {Array.<Object>} The list of users
   */
  static async getUsers() {
    try {
      const response = await fetch(`${this.apiUrl}/api/Users`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.log("Error fetching users:", error);
      throw error;
    }
  }

  /**
   *
   * @param {string} email - The email of the user
   * @param {string} username - The username of the user
   * @param {string} password - The password of the user
   */
  static async insertUserLogin({ email, username, password, roleName }) {
    const roleId = this.getRoleIdByName(roleName);

    try {
      const response = await fetch(`${this.apiUrl}/api/Users/Userlogins`, {
        method: "POST",
        body: JSON.stringify({
          user: { roleId: roleId },
          username,
          password,
          email,
        }),
      });
    } catch (error) {
      console.log("Error inserting user: ", error);
      throw error;
    }
  }

  /**
   *
   * @param {string} roleName
   * @returns {int} The id of the role to use for db inserts mainly
   */
  static getRoleIdByName(roleName) {
    return 1;
  }
}
