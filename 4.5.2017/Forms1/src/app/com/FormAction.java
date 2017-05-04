package app.com;

import java.util.List;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Iterator;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class FormAction
 */
@WebServlet("/FormAction")
public class FormAction extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FormAction() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		int fieldCount = Integer.parseInt(request.getParameter("fieldcount"));
		String formName = request.getParameter("formName");
		String tableName = formName.replace(" ", "_");
		String query = "insert into tabledetails values('"+tableName+"',";
		String toTableCreate="";
		int i;
		PrintWriter file = new PrintWriter("C:/Users/sugan_000/workspace/Forms1/src/app/com/"+formName+".txt");
		List<String> questionName = new ArrayList<String>();
		List<String> questionType = new ArrayList<String>();
		ArrayList options = new ArrayList();
		String str1,str2;
		PrintWriter out = response.getWriter();
		out.println(formName);
		for(i=0;i<fieldCount;i++) {
			str1 = request.getParameter("questionName"+(i+1));
			str2 = request.getParameter("questionType"+(i+1));
			toTableCreate += str1;
			if(str2.equals("paragraph")) {
				toTableCreate += " varchar(200)";
			}
			else {
				toTableCreate += " varchar(100)";
			}
			questionName.add(str1);
			questionType.add(str2);
			out.println(str1+"/"+str2);
			if(str2.equals("multipleChoice")||str2.equals("checkbox")||str2.equals("dropdown")) {
				int j;
				String sample;
				List option = new ArrayList();
				for(j=0;true;j++) {
					sample = request.getParameter("option"+(i+1)+"-"+(j+1));
					if(sample==null)
						break;
					option.add(sample);
					out.println(sample);
				}
				options.add(option);
			}	
			if(i!=fieldCount-1) {
				toTableCreate += ",";
			}
		}
		
		file.println(questionName.size());
		
		Iterator<String> it1 = questionName.iterator();
		Iterator<String> it2 = questionType.iterator();
		int pos=0;
		while(it1.hasNext()) {
			str1 = it1.next();
			str2 = it2.next();
			str1 = str1.replace(" ","##")+" "+str2.replace(" ","##");
			file.println(str1);
			if(str2.equals("multipleChoice")||str2.equals("checkbox")||str2.equals("dropdown")) {
				String sample,newString="";
				List<String> option = new ArrayList<String>();
				option = (List<String>) options.get(pos);
				pos=pos+1;
				Iterator<String> it3 = option.iterator();
				while(it3.hasNext()) {
					sample = it3.next();
					sample = sample.replace(" ","##");
					newString+=sample+" ";
				}
			file.println(newString);
		}
		
		//FileOutputStream fileOut = new FileOutputStream("");
		/*Iterator itr1 = options.iterator();
		while(itr1.hasNext()) {
			List list = (List) itr1.next();
			Iterator itr2 = list.iterator();
			while(itr2.hasNext()) {
				//out.println();
				String str = (String) itr2.next();
				
				file.print(str.replace(" ","##")+" ");
			}
			file.println();
		}*/
		
		
		//System.out.println(questionName);
		//System.out.println(questionType);
	}
		file.close();
		query+="'localhost:8080/Forms1/OpenFormFillPage?FormName="+formName+"','admin');";
		try {
			out.println(toTableCreate);
			out.println(tableName);
			Class.forName("com.mysql.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/forms","root","");
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery("select * from tabledetails where tablename = '"+tableName+"'");
			if(rs.next()) {
				st.executeUpdate("delete from tabledetails where tablename = '"+tableName+"'");
			}
			st.executeUpdate("drop table if exists "+tableName+"");	
			st.executeUpdate(query);
			out.println(query);
			out.println("create table "+tableName+" ("+toTableCreate+");");
			st.execute("create table "+tableName+" ("+toTableCreate+");");
			st.close();
			con.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		out.println("Form Created\nLink is : localhost:8080/Forms1/OpenFormFillPage?FormName="+formName);
	}
}
