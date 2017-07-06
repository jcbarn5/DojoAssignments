import java.util.Scanner;

public class PythagoreanTest {
  public static void main(String[] args) {
    Pythagorean hypotenuse = new Pythagorean();
    Scanner in = new Scanner(System.in);
    System.out.print("What value is side a: ");
    double legA = in.nextDouble();
    System.out.print("What value is side b: ");
    double legB = in.nextDouble();
    double legC = hypotenuse.Pythag((int) legA, (int) legB);
    System.out.println("Hypotenuse is: " + legC);

  }
}
