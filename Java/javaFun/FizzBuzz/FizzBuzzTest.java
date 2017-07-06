class FizzBuzzTest {
  public static void main(String[] args){
    int fizzyBuzz = Integer.parseInt(args[0]);
    FizzBuzz tester = new FizzBuzz();
    String FBAnswer = tester.fizzBuzz(fizzyBuzz);
    System.out.println(FBAnswer);
  }
}
