require_relative 'bank_account'
RSpec.describe BankAccount do
  before(:each) do
    @acc = BankAccount.new
  end
  it 'has a getter method for checking balances' do
    expect(@acc.checking).to eq(50)
  end
  it 'has a getter method for total acount balance' do
    expect(@acc.balance).to eq("Checking Balance: 50\nSaving Balance: 0\nTotal Balance: 50")
  end
  it "cannot change interest rate" do
    expect{@acc.interest_rate}.to raise_error(NoMethodError)
  end
  context 'withdrawing money' do
    it "raises an error if withdraw amount is greater than balance" do
      expect{@acc.withdral("checking", 100)}.to raise_error("Not enough funds")
    end
    it "withdral function reduces checking balance" do
      expect(@acc.withdral("checking", 25)).to eq(25)
    end
  end

end
