package sjsu.edu;

import java.io.IOException;
import java.math.BigInteger;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.sql.*;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * Servlet implementation class RegisterInDatabase
 */
@WebServlet("/RegisterInDatabase")
public class RegisterInDatabase extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public RegisterInDatabase() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		boolean status = false;
		String hashName = "null";
		String hashEmail = "null";
		String hashSsn = "null";
		String hashUrl = "null";
		String hashPhone = "null";
		String hashGender = "null";
		String hashCredit = "null";
		String hashPasswd = "null";
		String hashAge = "null";
		
		String name = request.getParameter("name");		
		String email = request.getParameter("email");		
		String phone = request.getParameter("phone");
		String ssn = request.getParameter("ssn");
		String url1 = request.getParameter("url");
		String gender = request.getParameter("gender");
		String passwd = request.getParameter("password");
		String credit = request.getParameter("credit");
		String age = request.getParameter("age");
		
		PreparedStatement pst = null;
		ResultSet rs = null;
		String url = "jdbc:mysql://localhost:3306/project";

		String driver = "com.mysql.jdbc.Driver";
		String userName = "root";
		String password = "root";
		try {
			MessageDigest md = MessageDigest.getInstance("MD5");
			md.update(name.getBytes(), 0, name.length());
			hashName = new BigInteger(1, md.digest()).toString(16);
			System.out.println(hashName);
			
			MessageDigest md1 = MessageDigest.getInstance("MD5");
			md1.update(email.getBytes(), 0, email.length());
			hashEmail = new BigInteger(1, md1.digest()).toString(16);
			System.out.println(hashEmail);
			
			MessageDigest md2 = MessageDigest.getInstance("MD5");
			md2.update(ssn.getBytes(), 0, ssn.length());
			hashSsn = new BigInteger(1, md2.digest()).toString(10);
			System.out.println(hashSsn);
			
			MessageDigest md3 = MessageDigest.getInstance("MD5");			
			md3.update(phone.getBytes(), 0, phone.length());			
			hashPhone = new BigInteger(1, md3.digest()).toString(10);
			System.out.println(hashPhone);
			
			MessageDigest md4 = MessageDigest.getInstance("MD5");
			md4.update(passwd.getBytes(), 0, passwd.length());			
			hashPasswd = new BigInteger(1, md4.digest()).toString(10);
			System.out.println(hashPasswd);
			
			MessageDigest md5 = MessageDigest.getInstance("MD5");
			md5.update(credit.getBytes(), 0, credit.length());
			hashCredit = new BigInteger(1, md5.digest()).toString(12);
			System.out.println(hashCredit);
			
			MessageDigest md6 = MessageDigest.getInstance("MD5");
			md6.update(url1.getBytes(), 0, url1.length());
			hashUrl = new BigInteger(1, md6.digest()).toString(16);
			System.out.println(hashUrl);
			
			MessageDigest md7 = MessageDigest.getInstance("MD5");
			md7.update(gender.getBytes(), 0, gender.length());
			hashGender = new BigInteger(1, md7.digest()).toString(12);
			System.out.println(hashGender);
			
			MessageDigest md8 = MessageDigest.getInstance("MD5");
			md8.update(age.getBytes(), 0, age.length());
			hashAge = new BigInteger(1, md8.digest()).toString(12);
			System.out.println(hashAge);
			
		} catch (NoSuchAlgorithmException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		try {

			Class.forName(driver).newInstance();

			Connection conn = (Connection) DriverManager.getConnection(url,
					userName, password);

			System.out.println("Connection created");
			PreparedStatement ps = ((java.sql.Connection) conn)
					.prepareStatement("insert into registration(FirstName,Email,ssn,phone,url,password,credit,Gender,Age) values (?,?,?,?,?,?,?,?,?)");
			ps.setString(1, hashName);
			ps.setString(2, hashEmail);
			ps.setString(3, hashSsn);
			ps.setString(4, hashPhone);
			ps.setString(5, hashUrl);
			ps.setString(6, hashPasswd);
			ps.setString(7, hashCredit);
			ps.setString(8, hashGender);
			ps.setString(9, hashAge);

			ps.execute();
			ps.close();
			System.out.println("Inserted");

		} catch (Exception e) {
			System.out.println(e);
		}

	}

}
