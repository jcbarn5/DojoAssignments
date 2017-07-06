import java.util.Scanner;
import java.lang.Math;

public class PythagoreanSingleFile {
  public static void main (String[] args){
    double legA, legB, legC;
    Scanner in = new Scanner(System.in);
    System.out.print("What value is side a: ");
    legA = in.nextDouble();
    System.out.print("What value is side b: ");
    legB = in.nextDouble();
    legC = Math.sqrt((legA*legA)+(legB*legB));
    System.out.println("Hypotenuse is: " + legC);
    }
}
