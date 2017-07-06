import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.*;


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

  // Generate and return an array with 10 random numbers between 55-100 and have it be sorted (showing the smallest number in the beginning). Display all the numbers in the array. Next, display the minimum value in the array as well as the maximum value.

  // Create a random string that is 5 characters long.

  // Generate an array with 10 random strings that are each 5 characters long
}
