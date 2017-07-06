public class StringManipulatorTest {
  public static void main(String[] args) {
    StringManipulator tester = new StringManipulator();
    System.out.println(tester.trimAndConcat("Hello", "World"));

    System.out.println(tester.getIndexOrNull("Upstanding", 't'));

    System.out.println(tester.getIndexOrNullSt("Upstanding", "tan"));

    System.out.println(tester.concatSubstring("Hello", 1, 2, "world"));
  }
}
