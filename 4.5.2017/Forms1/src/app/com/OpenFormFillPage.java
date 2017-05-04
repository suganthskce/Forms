package app.com;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class OpenFormFillPage
 */
@WebServlet("/OpenFormFillPage")
public class OpenFormFillPage extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public OpenFormFillPage() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
		String formName = request.getParameter("FormName");
		List<String> questionName = new ArrayList<String>();
		List<String> questionType = new ArrayList<String>();
		ArrayList options = new ArrayList();
		List<Integer> questionsWithOptionsRadio = new ArrayList<Integer>();
		List<Integer> questionsWithOptionsCheck = new ArrayList<Integer>();
		File openFile = new File("C:/Users/sugan_000/workspace/Forms1/src/app/com/"+formName+".txt");
		BufferedReader br = new BufferedReader(new FileReader(openFile));
		String line ;
		line = br.readLine();
		int loop,num = Integer.parseInt(line);
		for(loop=0;loop<num;loop++) {
			line = br.readLine();
			StringTokenizer tok = new StringTokenizer(line); 
			String questionNameTemp = ((String) tok.nextElement()).replace("##"," ");
			String questionTypeTemp = ((String) tok.nextElement()).replace("##"," ");
			questionName.add(questionNameTemp);
			questionType.add(questionTypeTemp);
			if(questionTypeTemp.equals("multipleChoice")) {
				questionsWithOptionsRadio.add(loop+1);
			}
			if(questionTypeTemp.equals("checkbox")) {
				questionsWithOptionsCheck.add(loop+1);				
			}
			if(questionTypeTemp.equals("multipleChoice")||questionTypeTemp.equals("checkbox")||questionTypeTemp.equals("dropdown")) {
				
				List option = new ArrayList();
				line = br.readLine();
				int var = 0;
				StringTokenizer tok1 = new StringTokenizer(line);
				while(tok1.hasMoreElements()) {
					String str = ((String) tok1.nextElement()).replace("##"," ");
					option.add(str);
					var = var+1;
				}
				if(questionTypeTemp.equals("multipleChoice")) {
					questionsWithOptionsRadio.add(var);
				}
				if(questionTypeTemp.equals("checkbox")) {
					questionsWithOptionsCheck.add(var);				
				}
				options.add(option);				
			}
		}
		System.out.println(questionName);
		System.out.println(questionType);
		System.out.println(options);
		String ques1 = "[";
		for(int i=0;i<questionsWithOptionsRadio.size();i++) {
			ques1 += " "+questionsWithOptionsRadio.get(i);
			if(i!=questionsWithOptionsRadio.size()-1)
				ques1+= " ,";
		}
		ques1+="]";
		String ques2 = "[";
		for(int i=0;i<questionsWithOptionsCheck.size();i++) {
			ques2 += " "+questionsWithOptionsCheck.get(i);
			if(i!=questionsWithOptionsCheck.size()-1)
				ques2+= " ,";
		}
		ques2+="]";
		String variables = "";
		for (int i=0;i<num;i++) {
			variables += "option"+(i+1);
			if(i!=num-1) {
				variables += " , ";
			}
		}
		variables+=";";
		out.println("<!DOCTYPE html>"
				+ "<html>"
				+ "<head>"
				+ "<meta charset=\"ISO-8859-1\">"
				+ "<title>"+formName+"</title>"
				+ "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
				+ "<link rel=\"stylesheet\" type=\"text/css\" href=\"FormFillPageStylesheet.css\">"
				+ " <script>\n"
				+ "var questionWithoptionsRadio = "+ques1+";\nvar questionWithoptionscheck = "+ques2+";\nvar answersradio = [];\n var temp = 0;\n"
				+ "var "+variables+"\n"
				+ "var num = "+num+";\n"
				+ "var formName = \""+formName+"\";\n"
			/*	+ "function name() {\n"
				+ ""
				+ ""
				+ "for(var i=0;i<questionWithoptions.length;i=i+2)\n{\n"
				+ "var ans=\"\";\n var r = questionWithoptions[i];\n var c = questionWithoptions[i+1];\n"
				+ "for(var j=0;j<c;j++){\n"
				+ "if(document.getElementById(\"option\"+i+1+\"-\"+j+1+\"\").checked==true){\n"
				+ "ans = document.getElementById(\"option\"+r+1+\"-\"+c+1+\"\").value;\nbreak;\n}\n}\n"
				+ "answers[temp]=ans;\ntemp=temp+1;\n}\n"
				+ "alert(answers[0]);"
				+ "alert(answers[1]);"
				+ "alert(answers[2]);"
				+ "}"*/
				+ "function name() {\n"
				+ "funcionToRadioButtons();\n"
				+ "functionToCheckbox();\n"
				+ "var str = \"\";\n"
				+ "for (var i=0;i<num;i++) {\n"
				+ "str += \"option\"+(i+1)+\"=\"+document.getElementById(\"option\"+(i+1)).value;\n"
				+ "if(i!=num-1){\n"
				+ "str += \" & \";\n}\n}\n"
				//+ "str += \";\";"
				+ "alert(str);\n"
				+ "document.getElementById(\"form\").action=\"UpdateTable?formName=\"+formName+\"&count=\"+num+\"&\"+str+\"\";\n"
				+ "document.getElementById(\"form\").submit();\n"
				+ "}\n"
				+ "function funcionToRadioButtons(){\n"
				+ "for(var j=0;j<questionWithoptionsRadio.length;j=j+2)\n{\n"
				+ "ans = \"\";\n"
				+ "alert(questionWithoptionsRadio[j+1]);\n"
				+ "for(var i=0;i<questionWithoptionsRadio[j+1];i++)\n{\n"
				+ "var rates = document.getElementById(\"option\"+questionWithoptionsRadio[j]+\"-\"+(i+1)).value;\nalert(rates);\n"
				+ "if(document.getElementById(\"option\"+questionWithoptionsRadio[j]+\"-\"+(i+1)).checked)\n{\n"
				+ "document.getElementById(\"option\"+questionWithoptionsRadio[j]).value=rates;\nalert(\"Selected = \"+rates)\nbreak;\n}\n}\n"
				+ "}\n}\n"
				+ "function functionToCheckbox() {\n"
				+ "var str = \"\";"
				+ "for(var j=0;j<questionWithoptionscheck.length;j=j+2)\n{\n"
				+ "ans = \"\";\n"
				//+ "alert(questionWithoptionscheck[j+1]);\n"
				+ "for(var i=0;i<questionWithoptionscheck[j+1];i++)\n{\n"
				+ "var rates = document.getElementById(\"option\"+questionWithoptionscheck[j]+\"-\"+(i+1)).value;\nalert(rates);\n"
				+ "if(document.getElementById(\"option\"+questionWithoptionscheck[j]+\"-\"+(i+1)).checked)\n{\n"
				+ "alert(\"Selected = \"+rates)\n"
				+ "rates = rates.replace(\" \",\"--\");"
				+ "str += \"\"+rates+\" \";"
				+ ""
				+ "}\n}\n"
				+ "document.getElementById(\"option\"+questionWithoptionscheck[j]).value=str;\n"
				+ ""
				/*+ "for(var i = 0; i < rates.length;  i++){\n"
				+ "if(rates[i].checked){\n"
				+ "alert(rates[i].value);\n"
				+ "ans += rates[i].value+\" \";"
				+ "\n}\n"
				+ "answersradio[temp]=ans;\n"
				+ "temp=temp+1;"
				+ "\n}\n"*/
				//+ "alert(document.getElementById(\"option3\").value);"
				//+ "alert(answersradio[0]);\nalert(answersradio[1]);\n"
				+ "}\n"
				+ ""
				+ ""
				+ "}\n"
				+ "</script>"
				+ "</head><body>"
				+ "<div id=\"nav-div\">"
				+ "<img alt=\"Form\" id=\"headIco\" src=\"image/form.ico\">"
				+ "<h1 id=\"headText\" contenteditable=\"false\">"+formName+"</h1>"
				+ "</div><div>"
				+ "<form id=\"form\" method=\"post\">"
				+ "<table id=\"formTable\">");
		
		
		
		int variable1,variable2,position=0;
		for(variable1=0;variable1<questionName.size();variable1++) {
			String questionTypeTemp = questionType.get(variable1);
			if(questionTypeTemp.equals("shortAnswer")) {
				out.println("<tr><td><label id=\"labelStyle\">"+questionName.get(variable1)+"</label></td></tr>");
				out.println("<tr><td><input type=\"text\" id=\"option"+(variable1+1)+"\" class=\"shortanswerInput\" placeholder=\"Your Answer\" /></td></tr>");
			} else if(questionTypeTemp.equals("paragraph")) {
				out.println("<tr><td><label id=\"labelStyle\">"+questionName.get(variable1)+"</label></td></tr>");
				out.println("<tr><td><input type=\"text\" id=\"option"+(variable1+1)+"\" class=\"paragraphInput\" placeholder=\"Your Answer\" /></td></tr>");
			} else if(questionTypeTemp.equals("multipleChoice")) {
				out.println("<tr><td><label id=\"labelStyle\">"+questionName.get(variable1)+"</label></td></tr>");
				List opt = (List) options.get(position);
				out.println("<tr><td id=\"option"+(variable1+1)+"\">");
				for(int i=0;i<opt.size();i++)
				out.println("<input type=\"radio\" name=\"option"+(variable1+1)+"\" id=\"option"+(variable1+1)+"-"+(i+1)+"\" class=\"radioInput\" value=\""+opt.get(i)+"\"/>"+opt.get(i)+"<br>");
				out.println("</td></tr>");
				position = position+1;
				
			} else if(questionTypeTemp.equals("checkbox")) {
				out.println("<tr><td><label id=\"labelStyle\">"+questionName.get(variable1)+"</label></td></tr>");
				List opt = (List) options.get(position);
				out.println("<tr><td id=\"option"+(variable1+1)+"\">");
				for(int i=0;i<opt.size();i++)
				out.println("<input type=\"checkbox\" name=\"option"+(variable1+1)+"\" id=\"option"+(variable1+1)+"-"+(i+1)+"\" class=\"checkboxInput\" value=\""+opt.get(i)+"\"/>"+opt.get(i)+"<br>");
				out.println("</td></tr>");
				position = position+1;
			} else if(questionTypeTemp.equals("dropdown")) {
				out.println("<tr><td><label id=\"labelStyle\">"+questionName.get(variable1)+"</label></td></tr>");
				List opt = (List) options.get(position);
				out.println("<tr><td><select id=\"option"+(variable1+1)+"\" name=\"options\" class=\"selectInput\" >");
				for(int i=0;i<opt.size();i++)
				out.println("<option value=\""+opt.get(i)+"\">"+opt.get(i)+"</option>");
				out.println("</select></td></tr>");
				position = position+1;
			}
		}
		
		/*File openFile = new File("C:/Users/sugan_000/workspace/Forms1/src/app/com/"+formName+".txt");
		FileReader fileReader = new FileReader(openFile);
		StringBuffer stringBuffer = new StringBuffer();
		int numCharsRead;
		char[] charArray = new char[1024];
		while((numCharsRead = fileReader.read(charArray))>0) {
			stringBuffer.append(charArray, 0 ,numCharsRead);
		}
		fileReader.close();
		System.out.println("Contents of file:");
		System.out.println(stringBuffer.toString());
		*/
	/*	File openFile = new File("C:/Users/sugan_000/workspace/Forms1/src/app/com/"+formName+".txt");
		BufferedReader br = new BufferedReader(new FileReader(openFile));
		String line ;
		line = br.readLine();
		int loop,num = Integer.parseInt(line);
		for(loop=0;loop<num;loop++) {
			line = br.readLine();
			StringTokenizer tok = new StringTokenizer(line); 
			String questionName = ((String) tok.nextElement()).replace("##"," ");
			String questionType = ((String) tok.nextElement()).replace("##"," ");
			
			
			//System.out.println("Question : "+questionName+"  Type ="+questionType);
			if(questionType.equals("multipleChoice")||questionType.equals("dropdown")||questionType.equals("checkbox")) {
				out.println("<tr><td><label id=\""+questionName+"\">"+questionName+"</label></td></tr>");
				out.println("<tr><td>");
				if(questionType.equals("dropdown")) {
					out.println("<select name=\"options\" class=\"selectInput\" id=\"option "+(loop+1)+"\">");
				}
				line = br.readLine();
				String option;
				StringTokenizer tok1 = new StringTokenizer(line);
				while(tok1.hasMoreElements()) {
					option = ((String) tok1.nextElement()).replace("##"," ");
					if(questionType.equals("multipleChoice")) {
						out.println("<input type=\"radio\" name=\"radio\" class=\"radioInput\" />"+option+"<br>");
					}else if(questionType.equals("dropdown")) {
						out.println("<option value=\""+option+"\">"+option+"</option>");
					}else if(questionType.equals("checkbox")) {
						out.println("<input type=\"checkbox\" name=\"check\" class=\"checkboxInput\" />"+option+"<br>");
					}
					

					//System.out.println("Option = "+option);
				}
				if(questionType.equals("dropdown")) {
					out.println("</select>");
				}
				out.println("</tr></td>");
			} else {
				out.println("<tr><td><label id=\"labelStyle\">"+questionName+"</label></td></tr>");
				
				if(questionType.equals("paragraph"))
				out.println("<tr><td><input type=\"text\" class=\"paragraphInput\" id=\""+questionName+"\" placeholder=\"Your Answer\" /></td></tr>");
				else if(questionType.equals("shortAnswer"))
					out.println("<tr><td><input type=\"text\" class=\"shortanswerInput\" id=\""+questionName+"\" placeholder=\"Your Answer\" /></td></tr>");
			}
			
			
		}
		
		
		*/
		
		
		



		out.println("<tr><td><p id=\"submitBtn\" onclick=\"name()\" >Submit</p></td></tr>"
				+ "</table>"
				+ "</form>"
				+ "</div>"
				+ "</body>"
				+ "</html>");
		
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

}
