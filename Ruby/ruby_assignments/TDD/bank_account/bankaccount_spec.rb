require_relative 'bank_account'
RSpec.describe BankAccount do
  before(:each) do
    @acc = BankAccount.new
  end
  it 'has a getter method for checking balances' do
    expect(@acc.checking).to eq(0)
  end
  it 'has a getter method for total acount balance' do
    expect(@acc.balance).to eq("Checking Balance: 0\nSaving Balance: 0\nTotal Balance: 0")
  end

# end
#   context "withdrawing money" do
#     it "raises an error if user tries to withdraw more money than the have in checking" do
#       expect{ @acc.withdral("checking", 100) }.to raise_error("Not enough funds, you have #{@checking} in this account")
#     end
#   end
end
