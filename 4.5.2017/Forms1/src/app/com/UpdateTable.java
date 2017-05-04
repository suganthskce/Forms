package app.com;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class UpdateTable
 */
@WebServlet("/UpdateTable")
public class UpdateTable extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateTable() {
        super();
        // TODO Auto-generated constructor stub
    }


	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String formName = request.getParameter("formName");
		String tableName = formName.replace(" ","_");
		String options="";
		int count = Integer.parseInt(request.getParameter("count"));
		//System.out.println(formName);
		PrintWriter out = response.getWriter();
		out.println(formName);
		out.println(request.getParameter("option1"));
		out.println(request.getParameter("option2"));
		out.println(request.getParameter("option3"));
		out.println(request.getParameter("option4"));
		out.println(request.getParameter("option5"));
		for(int i=0;i<count;i++) {
			String option = request.getParameter("option"+(i+1));
			options+="'"+option+"'";
			if(i!=count-1) {
				options+=" , ";
			}
		}
		
		out.println(options);
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/forms","root","");
			Statement st = con.createStatement();
			st.executeUpdate("insert into "+tableName+" values("+options+");");
			out.println("insert into "+tableName+" values("+options+");");
			st.close();
			con.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
	}

}
