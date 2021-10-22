import java.util.Scanner;

 class hackerearthMonkRotatilon {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) ;{
            int n=sc.nextInt();
            int o=0;
            int e=0;
            for(int i=0;i<2*n;i++){
                int k=sc.nextInt();
                if (k==1){
                    o++;
                }
                else if(k%2==0){
                    e++;
                }
                else{
                    o++;
                }
            }
            if(o==e){
                System.out.println("YES");
            }
            else{
                System.out.println("NO");
            }
        }
    } }