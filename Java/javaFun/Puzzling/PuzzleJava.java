import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

public class PuzzleJava{
  // Create an array with the following values: 3,5,1,2,7,9,8,13,25,32. Print the sum of all numbers in the array. Also have the function return an array that only includes numbers that are greater than 10 (e.g. when you pass the array above, it should return an array with the values of 13,25,32)
  public ArrayList SumNTen(int[] arr){
    int sum = 0;
    ArrayList<Integer> GTenArr = new ArrayList<>();
    for (int i = 0; i < arr.length; i++ ) {
      sum += arr[i];
      if(arr[i] > 10){
        GTenArr.add(arr[i]);
      }
    }
    System.out.println(sum);
    return GTenArr;
  }
  // Create an array with the following values: Nancy, Jinichi, Fujibayashi, Momochi, Ishikawa. Shuffle the array and print the name of each person. Have the method also return an array with names that are longer than 5 characters.
  public String Shuffler(String[] arr){
    Collections.shuffle(Arrays.asList(arr));
    System.out.println(Arrays.toString(arr));
    ArrayList<String> GFiveArr = new ArrayList<>();
    for (int j = 0; j < arr.length; j++ ) {
      if(arr[j].length() > 5){
        GFiveArr.add(arr[j]);
      }
    }
    System.out.println(GFiveArr);
    return "fin";
  }
  // Create an array that contains all 26 letters in the alphabet (this array must have 26 values). Shuffle the array and display the last letter of the array. Have it also display the first letter of the array. If the first letter in the array is a vowel, have it display a message
  public String AlphaShuff(String[] arr){
    Collections.shuffle(Arrays.asList(arr));
    System.out.println(Arrays.toString(arr));
    System.out.println(arr[0]);
    System.out.println(arr[arr.length-1]);
    if(arr[0] == "a" || arr[0] == "e" || arr[0] == "i" || arr[0] == "o" || arr[0] == "u"){
      System.out.println("You have found a vowel");
    }
    return "fin";
  }
  // Generate and return an array with 10 random numbers between 55-100.
  public static int[] Rando(){
    int[] RandoTen;
    RandoTen = new int[10];
    // Random RandoGen = new Random();
    for (int i = 0; i < 10; i++) {
      RandoTen[i] = ThreadLocalRandom.current().nextInt(55, 101);
    }
    System.out.println(Arrays.toString(RandoTen));
    return RandoTen;
  }
  // Generate and return an array with 10 random numbers between 55-100 and have it be sorted (showing the smallest number in the beginning). Display all the numbers in the array. Next, display the minimum value in the array as well as the maximum value.
  public static int[] RandoSorted(){
    int[] tenner = Rando();
    Arrays.sort(tenner);
    System.out.println(Arrays.toString(tenner));
    System.out.println("Min: " + Integer.toString(tenner[0]));
    System.out.println("Max: " + Integer.toString(tenner[tenner.length-1]));
    return tenner;
  }
  // Create a random string that is 5 characters long.
  public static String RandoStr(){
    Random Rand = ThreadLocalRandom.current();
    String letters = "abcdefghijklmnopqrstuvwxyz";
    int StrLen = 5;
    return generateString(Rand, letters, StrLen);
  }

  // Generate an array with 10 random strings that are each 5 characters long
  public static String[] RandoStr10(){
    String[] stringArray;
    stringArray = new String[10];
    Random rng = ThreadLocalRandom.current();
    String letters = "abcdefghijklmnopqrstuvwxyz";
    int five = 5;

    for(int x = 0; x < 10; x++){
      String randString = generateString(rng, letters, five);
      stringArray[x] = randString;
    }
    System.out.println(Arrays.toString(stringArray));
    return stringArray;
  }

  static String generateString(Random rng, String characters, int length){
    char[] text = new char[length];
    for ( int i = 0; i < length; i++){
      text[i] = characters.charAt(rng.nextInt(characters.length()));
    }
    return new String(text);
  }
}
