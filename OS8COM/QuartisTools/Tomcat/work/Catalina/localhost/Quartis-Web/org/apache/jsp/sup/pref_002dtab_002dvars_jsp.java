package org.apache.jsp.sup;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.Map;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import quartisspv.util.Constants;
import quartisspv.page.PageDescription;
import quartisspv.action.preference.PreferenceDelegate;
import quartisspv.page.jaxb.XmlPageVar;
import quartisspv.page.jaxb.VariableListType;
import quartisspv.page.jaxb.VariableListRefType;
import quartisspv.servlet.Session;

public final class pref_002dtab_002dvars_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.AnnotationProcessor _jsp_annotationprocessor;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_annotationprocessor = (org.apache.AnnotationProcessor) getServletConfig().getServletContext().getAttribute(org.apache.AnnotationProcessor.class.getName());
  }

  public void _jspDestroy() {
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");

        Session appSession = (Session) session.getAttribute(Constants.SESSION_ATTR);
        PreferenceDelegate delegate = (PreferenceDelegate) request.getAttribute(Constants.PREFERENCE_ATTR);

        List<XmlPageVar> vrs = new ArrayList<XmlPageVar>(delegate.getVariables(appSession, request));
        Collections.sort(vrs, new Comparator<XmlPageVar>() {
            public int compare(XmlPageVar o1, XmlPageVar o2) {
                    return o1.getPosition() - o2.getPosition();
                }
            });

      out.write("\n");
      out.write("\n");
      out.write("<table>\n");
      out.write("    ");

        if (delegate != null) {
            Map vars = appSession.getVariables();
            for (XmlPageVar xpp : vrs) {
                String name = xpp.getName();
                String label = xpp.getLabel();
                String desc = xpp.getDescription();
                String dftvalue = xpp.getDefault();
                String value = (String) vars.get(xpp.getName());
                if (label == null) {
                    label = name;
                }
                if (desc == null) {
                    desc = label;
                }
                if (value == null) {
                    value = dftvalue;
                }
    
      out.write("\n");
      out.write("    <tr>\n");
      out.write("        <td title=\"");
      out.print(desc);
      out.write('"');
      out.write('>');
      out.print(label);
      out.write(" : </td>\n");
      out.write("        <td id=\"td");
      out.print(name);
      out.write("\">\n");
      out.write("            ");

            String[][] lis = null;
            if (xpp instanceof VariableListType) {
                lis = delegate.getListVariables(appSession, request, (VariableListType) xpp);
                } else if (xpp instanceof VariableListRefType) {
                lis = delegate.getListVariables(appSession, (VariableListRefType) xpp);
                    }

                if (lis != null) {
            
      out.write("\n");
      out.write("\n");
      out.write("            <select id=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                    name=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                    default=\"");
      out.print(dftvalue);
      out.write("\">\n");
      out.write("                ");
 for (String[] li : lis) {
      out.write("\n");
      out.write("                <option value=\"");
      out.print(li[1]);
      out.write('"');
      out.write('>');
      out.print(li[0]);
      out.write("</option>\n");
      out.write("                ");
 }
      out.write("\n");
      out.write("            </select>\n");
      out.write("\n");
      out.write("            <script type=\"text/javascript\">\n");
      out.write("                var nf = document.getElementById(\"");
      out.print(name);
      out.write("\");\n");
      out.write("                for (var i=0;i<nf.length;i++) {\n");
      out.write("                    if (nf.options[i].value == \"");
      out.print(value);
      out.write("\") {\n");
      out.write("                        nf.selectedIndex = i;\n");
      out.write("                    }\n");
      out.write("                }\n");
      out.write("            </script>\n");
      out.write("\n");
      out.write("            ");
 } else {
      out.write("\n");
      out.write("\n");
      out.write("            <input id=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                   type=\"text\"\n");
      out.write("                   name=\"");
      out.print(name);
      out.write("\"\n");
      out.write("                   default=\"");
      out.print(dftvalue);
      out.write("\"\n");
      out.write("                   value=\"");
      out.print(value);
      out.write("\"/>            \n");
      out.write("            ");
 }
      out.write("\n");
      out.write("        </td>\n");
      out.write("    </tr>\n");
      out.write("    ");

            }
        }
    
      out.write("\n");
      out.write("</table>\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
