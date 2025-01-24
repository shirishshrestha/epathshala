import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useGetUserDetails } from "../hooks/query/useGetUserDetails";
import { Loader } from "../components";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { useRemoveTwoFactor } from "../hooks/mutation/useRemoveTwoFactor";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useGetTwoFactor } from "../hooks";
import { useSetTwoFactor } from "../hooks/mutation/useSetTwoFactor";
import { Toaster } from "@/components/ui/toaster";

const ProfileSetting = () => {
  const { handleSubmit: RemoveSubmit, register: RemoveRegister } = useForm();
  const { handleSubmit: SetTwoFaSubmit, register: SetTwoFaRegister } =
    useForm();
  const [removeTwofa, setRemoveTwofa] = useState(false);
  const [displayQr, setDisplayQr] = useState(false);
  const userData = useSelector((state) => state.auth?.userData?.data);
  const getInitials = useMemo(
    () => (name) => {
      const parts = name.split(" ");
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    },
    []
  );

  const { data: ProfileData, isPending: ProfileDataPending } =
    useGetUserDetails("userDetails");



  const { mutate: RemoveTwoFactor, isPending: RemoveTwoFactorPending } =
    useRemoveTwoFactor("userDetails", setRemoveTwofa);

  const { data: GetTwoFactor, isPending: GetTwoFactorPending } =
    useGetTwoFactor("getTwoFactor", ProfileData);

  const { mutate: EnableTwoFa, isPending: EnableTwoFaPending } =
    useSetTwoFactor("userDetails", setDisplayQr);

  const handleTwoFactor = () => {
    if (ProfileData?.data?.use2FA) {
      setRemoveTwofa(true);
    } else {
      setDisplayQr(true);
    }
  };

  const handleRemoveTwofa = (data) => {
    RemoveTwoFactor(data.remove_otp);
  };

  const handleSetTwoFa = (data) => {
    const enableData = {
      set_otp: data.set_otp,
      secretToken: GetTwoFactor?.data?.secretToken,
    };
    EnableTwoFa(enableData);
  };

  return (
    <section>
      {(ProfileDataPending || RemoveTwoFactorPending || GetTwoFactorPending,
      EnableTwoFaPending) && <Loader />}
      <Toaster />
      <div className="">
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-semibold mb-6">My Profile</h1>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="" alt="Profile" />
                    <AvatarFallback className="text-foreground">
                      {getInitials(userData?.fullname)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground capitalize">
                      {ProfileData?.data?.fullname}
                    </h2>
                    <p className="text-foreground capitalize">
                      {ProfileData?.data?.userType}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 text-foreground">
            <CardHeader className="flex flex-row items-center justify-between">
              <h3 className="text-lg font-semibold ">Personal Information</h3>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm mb-1">Fullname</p>
                <p> {ProfileData?.data?.fullname}</p>
              </div>

              <div>
                <p className="text-sm mb-1">Email address</p>
                <p> {ProfileData?.data?.email}</p>
              </div>

              <div className="text-sm mb-1">
                <p className="text-sm mb-1">Username</p>
                <p> {ProfileData?.data?.username}</p>
              </div>

              <div>
                <p className="text-sm mb-1">Registered Date</p>
                <p> {ProfileData?.data?.createdAt.split("T")[0]}</p>
              </div>
            </CardContent>
          </Card>

          {/* Address Card */}
          <Card className="text-foreground">
            <CardHeader className="flex flex-row items-center gap-3 ">
              <h3 className="text-lg font-semibold mt-[6px]">
                Enable Two Factor Authentication
              </h3>
              <Switch
                checked={ProfileData?.data?.use2FA}
                onClick={handleTwoFactor}
              />
            </CardHeader>
            {removeTwofa && (
              <CardContent>
                <form
                  className="space-y-2"
                  onSubmit={RemoveSubmit(handleRemoveTwofa)}
                >
                  <Label>Enter OTP</Label>
                  <Input
                    className="max-w-80"
                    type="text"
                    placeholder="Enter OTP"
                    {...RemoveRegister("remove_otp", { required: true })}
                  />
                  <Button>Submit</Button>
                </form>
              </CardContent>
            )}
            {displayQr && (
              <CardContent>
                <form
                  className="space-y-2"
                  onSubmit={SetTwoFaSubmit(handleSetTwoFa)}
                >
                  <figure className="mb-2">
                    <img src={GetTwoFactor?.data?.qr} alt="qr" />
                  </figure>
                  <Label>Enter OTP for enabling 2fa</Label>
                  <Input
                    className="max-w-80"
                    type="text"
                    placeholder="Enter OTP"
                    {...SetTwoFaRegister("set_otp", { required: true })}
                  />
                  <Button>Submit</Button>
                </form>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfileSetting;
