import java.util.ArrayList;
import java.util.Arrays;

public class BasicJava {
  public String TwoFiftyFive() {
    int i = 1;
    while (i < 256){
      System.out.println(i);
      i++;
    }
    return "fin";
  }
  public String TwoFiftyFiveOdd() {
    int i = 1;
    while (i < 256){
      System.out.println(i);
      i+= 2;
    }
    return "fin";
  }
  public String TwoFiftyFiveSum() {
    int sum = 0;
    int i = 1;
    while (i < 256){
      sum += i;
      System.out.println("New Number: " + i + " New Sum: " + sum );
      // System.out.print("New Sum:" + sum );
      i++;
    }
    System.out.println(sum);
    return "fin";
  }
  public String IterateArray(int[] arr) {
    int i = 0;
    while(i < arr.length) {
      System.out.println(arr[i]);
      i++;
    }
    return "fin";
  }
  public String TwoFiftyFiveOddArray() {
    int i = 1;
    ArrayList<Integer> arr = new ArrayList<>();
    while (i < 256){
      arr.add(i);
      i+= 2;
    }
    System.out.println(arr);
    return "fin";
  }
  public String mma(int[] arr){
    int sum = 0;
    int avg;
    int min = arr[0];
    int max = arr[0];
    for(int i = 0; i < arr.length; i++){
      sum += arr[0];
      if(arr[i] > max){
        max = arr[i];
      }
      if(arr[i] < min){
        min = arr[i];
      }
    }
    avg = sum/arr.length;
    int[] ans = {max, min, avg};
    System.out.println(Arrays.toString(ans));
    return "fin";
  }
  public String GrThanY(int[] arr, int y){
    int count = 0;
    for (int i = 0; i < arr.length; i++) {
      if(arr[i] > y){
        count++;
      }
    }
    System.out.println(count);
    return "fin";
  }
  public String Squares(int[] arr){
    for (int i = 0; i < arr.length ; i++) {
      arr[i] = arr[i]*arr[i];
    }
    System.out.println(Arrays.toString(arr));
    return "fin";
  }
  public String ElimNeg(int[] arr){
    for (int i = 0; i < arr.length ; i++) {
      if(arr[i] < 0){
        arr[i] = 0;
      }
    }
    System.out.println(Arrays.toString(arr));
    return "fin";
    }
  public String Shifting(int[] arr){
    for(int i = 0; i < arr.length-1; i++){
      arr[i] = arr[i+1];
    }
    arr[arr.length-1] = 0;
    System.out.println(Arrays.toString(arr));
    return "fin";
  }
}
